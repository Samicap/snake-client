const net = require('net');
const connect = require('./client');
console.log('Connecting ...');
connect();
// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '135.23.222.131',
//     port: 50542
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   conn.on("data", (data) => {
//     console.log(data)
//   });

//   conn.on("connect", () => {
//     console.log("successfuly connected")
//     conn.write("Name: SAM")
//   });

//   return conn;
// }

// console.log('Connecting ...');
// connect();


