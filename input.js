let connection;

const handleUserInput = function(key) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Exitting...")
      process.exit();
    }
    
    if (key === '\u0077') { // unicode for w
      connection.write('Move: up')
    }
    else if (key === '\u0073') { // unicode for s
      connection.write('Move: down')
    }
    else if (key === '\u0064') { // unicode for d
      connection.write('Move: right')
    }
    else if (key === '\u0061') { // unicode for a
      connection.write('Move: left')
    }
    else if (key === '\u006A') {
      connection.write('Say: HUBBA HUBBA')
    }
  });
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
  
};

module.exports = { setupInput };