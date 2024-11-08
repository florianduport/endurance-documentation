---
sidebar_position: 1
---

# Events

Events are internal events that a module listener can listen. 

You can emit events anytime in your application 

```js
import { emitter, eventTypes } from 'endurance-core/lib/emitter.js';

emitter.emit(eventTypes.ORDER_CREATED, newOrder);
```

The eventTypes values doesn't have to be created first. It's created dynamically. 

You can list all existing events in the application using the Endurance CLI command : 

```bash
endurance list-events
```