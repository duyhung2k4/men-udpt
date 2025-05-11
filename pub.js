const express = require('express');
const { createClient } = require('redis');

const app = express();
const redisClient = createClient();

redisClient.connect().catch(console.error);

app.get('/ping', async (req, res) => {
  const message = `Ping at ${new Date().toISOString()}`;
  await redisClient.publish('my_channel', message);
  console.log(`Published: ${message}`);
  res.send({ status: 'Message published', message });
});

app.listen(8000, () => {
  console.log('Publisher listening on port 8000');
});
