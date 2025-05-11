const express = require('express');
const { createClient } = require('redis');

const app = express();
const redisSubClient = createClient();

(async () => {
  await redisSubClient.connect();

  await redisSubClient.subscribe('my_channel', (message) => {
    console.log(`Received: ${message}`);
  });
})();

app.listen(8001, () => {
  console.log('Subscriber listening on port 8001');
});
