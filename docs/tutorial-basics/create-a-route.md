---
sidebar_position: 2
---

# Create a Route

If you are already familiar with Express and NodeJS, this will be plain simple. 


## Create a router

First, we need to initiate a new router object like this : 

```js
import routerBase from 'endurance-core/lib/router.js';
const router = routerBase();
```

## Add routes 

Adding routes is simple :

```js
router.get("/",  (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});
```

The router support all basic HTTP verbs (from Express). 


## AutoWire

If you have a Model and you want to create an easy CRUD API, you can use the router AutoWire function :
First, we need to change to requireDb : true. Then :


```js
import routerBase from 'endurance-core/lib/router.js';
const router = routerBase();

router.autoWire(ModelName, 'ModelName', restrictAccess);
```

restrictAccess is an optionnal parameter that is an object composed 2 functions : checkPermissions and restrictToOwner. Basic definitions of thoses methods will be available through the auth.js library. 
So lets add : 

```js
const auth = require('endurance-core/lib/auth');

const restrictkAccess = {
  checkUserPermissions: auth.checkUserPermissions(['canManageModelObjects']), 
  restrictToOwner: auth.restrictToOwner((req) => req.modelName.userId)  
};
```

Here's the final example to autoWire a Webhook Model : 

```js
import routerBase from 'endurance-core/lib/router.js';
const router = routerBase();

import Webhook from '../models/Webhook.model.js';
import auth  from 'endurance-core/lib/auth.js';

const restrictAccess = {
  checkUserPermissions: auth.checkUserPermissions(['canManageWebhooks']),
  restrictToOwner: auth.restrictToOwner((req) => req.webhook.userId)
};

router.autoWire(Webhook, 'Webhook', restrictAccess);

export default router;

```

## API Versionning

API versionning is very important if you want to ensure users stability. 

API versionning is already available with Endurance. To create a new version of a router, you just need to duplicate the file and rename by prefixing the version number. 

Example : 
```bash
webhook.router.js
```

to
```bash
v1-webhook.router.js
v2-webhook.router.js
```

Now all the routes will be available through : /version/router-name/route

Example :
```bash
/v1/webhook/
```

If API versionning is a matter to you now or in the future, it's strongly recommended to add v1 prefix to all routers by default. 