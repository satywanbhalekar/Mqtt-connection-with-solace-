const mqtt = require('mqtt');

// MQTT connection details
const client = mqtt.connect('mqtt://localhost:1883', {
  clientId: 'mqttPublisher',
  username: 'default',
  password: 'default',
  protocolVersion: 4, // MQTT version 3.1.1
});

client.on('connect', () => {
  console.log('Publisher connected to broker');

  // Publish to a specific topic that is mapped to a queue
  const topic = 'tutorial/queue';
  const message = 'Hello hi, Topic to Queue Mapping!';
  
  // Publishing with retain flag set to true
  client.publish(topic, message, { qos: 1, retain: true }, (err) => {
    if (!err) {
      console.log('Message published successfully');
    } else {
      console.error('Publish error:', err);
    }
    setTimeout(() => {
      client.end();
    }, 2000); // Added delay before ending connection
  });
});
