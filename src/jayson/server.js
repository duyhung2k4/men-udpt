const jayson = require('jayson');

// Tạo server RPC
const server = jayson.server({
  add: function ([a, b], callback) {
    callback(null, a + b);
  }
});

server.http().listen(3000, () => {
  console.log('JSON-RPC server listening on port 3000');
});
