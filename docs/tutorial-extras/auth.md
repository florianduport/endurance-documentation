---
sidebar_position: 1
---

# Auth

Auth lib is a set of features based on Passport.js to providing an Auth Middleware for your API. Using the Auth lib, you'll be able to restrict access to certain endpoints / routes, or manage the data visibility inside a specific endpoint. 

Obviously, it also provides all the login and JWT token mecanism.

## Warning

Since a lib is not meant to use a model and access data. All the User implementation has to be provided and loaded from a middleware from an external module. 

To do so, you can create your own middleware or use a module from the EDRM library such as ``` edrm-user ```

## Create your middleware 

Create a folder "middlewares" in your module.

Create a xxx.middleware.js file. 

The auth middleware will have to provide all the implentation for the app lib to use : 

```
const auth = require('endurance-core/lib/auth');
auth.initializeAuth({
  getUserById: getUserByIdOrEmail,
  validatePassword: validateUserPassword,
  storeRefreshToken: storeUserRefreshToken,
  getStoredRefreshToken: getUserByRefreshToken,
  deleteStoredRefreshToken: deleteRefreshToken,
  checkUserPermissions,
  restrictToOwner,
});
```

Complete example : 

```
const User = require('../models/user.model');
const auth = require('endurance-core/lib/auth');

const getUserByIdOrEmail = async (idOrEmail) => {
  if (typeof idOrEmail === 'object' && idOrEmail.email) {
    return await User.findOne({ email: idOrEmail.email });
  }
  return await User.findById(idOrEmail);
};

const validateUserPassword = async (user, password) => {
  return user.comparePassword(password);
};

const storeUserRefreshToken = async (userId, refreshToken) => {
  await User.updateOne({ _id: userId }, { refreshToken });
};

const getUserByRefreshToken = async (refreshToken) => {
  return await User.findOne({ refreshToken });
};

const deleteRefreshToken = async (refreshToken) => {
  await User.updateOne({ refreshToken }, { $unset: { refreshToken: 1 } });
};

const checkUserPermissions = (requiredPermissions, bypassForSuperadmin = false) => {
  return [
    auth.authenticateJWT(), 
    async (req, res, next) => {
      if (bypassForSuperadmin && req.user.role.name === 'superadmin') {
        return next(); 
      }

      const role = await req.user.populate('role').execPopulate();
      const userPermissions = role.permissions.map((perm) => perm.name);

      const hasPermission = requiredPermissions.every((perm) => userPermissions.includes(perm));
      if (!hasPermission) {
        return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
      }

      next();
    },
  ];
};

const restrictToOwner = (getResourceOwnerIdFn) => {
  return [
    auth.authenticateJWT(), 
    async (req, res, next) => {
      try {
        const resourceOwnerId = await getResourceOwnerIdFn(req);

        if (req.user.id !== resourceOwnerId.toString()) {
          return res.status(403).json({ message: 'Access denied: You do not own this resource' });
        }

        next();
      } catch (err) {
        res.status(500).json({ message: 'Error checking resource ownership', error: err.message });
      }
    },
  ];
};

auth.initializeAuth({
  getUserById: getUserByIdOrEmail,
  validatePassword: validateUserPassword,
  storeRefreshToken: storeUserRefreshToken,
  getStoredRefreshToken: getUserByRefreshToken,
  deleteStoredRefreshToken: deleteRefreshToken,
  checkUserPermissions,
  restrictToOwner,
});

module.exports = {
  checkUserPermissions,
  restrictToOwner,
};
```