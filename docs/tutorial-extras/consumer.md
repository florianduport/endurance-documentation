---
sidebar_position: 1
---

# Consumer

A consumer is the listener of external queuing systems like AMQP or Kafka (currently both are supported by Endurance). 

To create a new consumer, you must create a "consumers" folder and a xxx.consumer.js file. 

```js
const consumer = require('endurance-core/lib/consumer')();
const Order = require('../models/order.model');

const processAmqpMessage = async (msg) => {
  try {
    const orderData = JSON.parse(msg.content.toString());

    // Exemple de logique : créer une nouvelle commande à partir des données du message
    const order = new Order(orderData);
    await order.save();

    console.log(`Order processed and saved: ${order._id}`);
  } catch (error) {
    console.error('Error processing AMQP message:', error);
  }
};

const processKafkaMessage = async (message) => {
  try {
    const orderData = JSON.parse(message.value);

    // Exemple de logique : mettre à jour l'état de la commande en fonction des données du message
    const order = await Order.findById(orderData.orderId);
    if (order) {
      order.status = orderData.status;
      await order.save();

      console.log(`Order status updated: ${order._id}`);
    }
  } catch (error) {
    console.error('Error processing Kafka message:', error);
  }
};

consumer.createConsumer('amqp', { queue: 'orderQueue' }, processAmqpMessage);

consumer.createConsumer('kafka', { topic: 'orderTopic', groupId: 'orderServiceGroup' }, processKafkaMessage);
```
