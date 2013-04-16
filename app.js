var spawn = require('child_process').spawn;
var gollum = spawn('gollum');

gollum.on('message', function(message){ console.log(message); });
gollum.on('close', function(code){ process.exit(code); });
