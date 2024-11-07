---
sidebar_position: 4
---

# Create a Listener

A listener is able to trigger an action when an internal event is emitted. The event may be emitted by any other module or by endurance core. 

You can list all available events by using the command 

```bash
endurance list-events
```

## Create a listener 


```js
import listener from 'endurance-core/lib/listener.js';
import { emitter, eventTypes } from 'endurance-core/lib/emitter.js';
import Webhook from '../models/Webhook.model.js';

listener.createListener(eventTypes.WEBHOOK_REGISTERED, (data) => {
    console.log('Webhook registered:', data);
});

console.log('Webhook listener initialized');

export default listener;
```

You can also create a listener to listen to any event in the app. This must be avoided except for specific needs like this case : 

```js
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