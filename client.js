const net = require('net');
const { PORT, IP } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("successfuly connected")
    conn.write("Name: SAM")
    // conn.write('Move: down');

    // setTimeout(submitMove, 50, conn)
  });

  // conn.on('data', (message) => { // This is receiving data from the server.
  //   console.log(message);
  // });

  return conn;
};

module.exports = { connect };