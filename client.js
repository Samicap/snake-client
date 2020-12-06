const net = require('net');

let directions = {
  0: "up",
  1: "down",
  2: "left",
  3: "right"
}

function getMove(){
  let n = Math.floor(Math.random() * 3)
  return "Move: " + directions[n]
}

function submitMove(conn){
  let move = getMove()
  console.log(move)
  conn.write(move)
}


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,

  });

  conn.setEncoding('utf8');

  // conn.listen(port, function() {
  //   console.log('Server Running');
  // }),


  conn.on("connect", () => {
    console.log("successfuly connected")
    conn.write('Name: SAM');

    setTimeout(submitMove, 50, conn)
  });

  return conn;
};

module.exports = connect;