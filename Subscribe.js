const mqtt = require('mqtt');



// MQTT connection details
const client = mqtt.connect('mqtt://localhost:1883', {
  clientId: 'mqttSubscriber',
  username: 'default',
  password: 'default',
  protocolVersion: 4, // MQTT version 3.1.1
});

client.on('connect', () => {
  console.log('Subscriber connected to broker');

  // Subscribe to the topic
  const topic = 'tutorial/queue';
  client.subscribe(topic, { qos: 1 }, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    } else {
      console.error('Subscribe error:', err);
    }
  });
});

// Receiving messages
client.on('message', (topic, message) => {
  console.log(`Received message: ${message.toString()} from topic: ${topic}`);
});
