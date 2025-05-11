const jayson = require('jayson');

const client = jayson.Client.http({
  port: 3000
});

client.request('add', [3, 4], function (err, response) {
  if (err) throw err;
  console.log('Kết quả:', response.result); // Kết quả: 7
});
