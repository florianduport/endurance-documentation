---
sidebar_position: 3
---

# Create a Model

## Create a mongoose model

Create and file a mongoose schema object containing all the properties of your model object. 

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webhookSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Webhook = mongoose.model('Webhook', webhookSchema);
module.exports = Webhook;
```

Now, even if modules are independant, they can share and work on some common models if necessary (even though it's not recommended). If you want to work with the same models on multiple modules, you'll have to have distinct names for your schemas. Then you can specify a parameter to create a common MongoDB collection name :

```js
const Webhook = mongoose.model('Webhook', webhookSchema, 'webhook');
```