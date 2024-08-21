---
sidebar_position: 4
---

# Create a Listener

A listener is able to trigger an action when an internal event is emitted. The event may be emitted by any other module or by endurance core. 

You can list all available events by using the command 

```
endurance list-events
```

## Create a listener 


```
const listener = require('endurance-core/lib/listener');
const Webhook = require('../models/webhook.model');

listener.createListener('WEBHOOK_REGISTERED', (data) => {
    console.log('Webhook registered:', data);
});

console.log('Webhook listener initialized');

module.exports = listener;
```

You can also create a listener to listen to any event in the app. This must be avoided except for specific needs like this case : 

```
listener.createAnyListener(async (event, data) => {
    console.log(`Event received: ${event}`);
    try {
        const webhooks = await Webhook.find({ event });
        webhooks.forEach(webhook => {
            callWebhook(webhook, event, data).catch(error => {
                console.error(`Error in calling webhook: ${webhook.url}`, error);
            });
        });
    } catch (error) {
        console.error(`Error processing event: ${event}`, error);
    }
});
```

Here's the list of available methods for the listener object : 

- createListener
- removeListener
- onceListener
- createAnyListener
- removeAnyListener