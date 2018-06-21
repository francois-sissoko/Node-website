var net = require('net');
var client = net.connect({port: 8107, host:'localhost'}, function() {
	console.log('Client connected');
	client.write('Some Data\r\n');
	});
client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});
client.on('end', function() {
	console.log('Client disconnected');
});

var server = net.createServer(function(client) {
	console.log('data', function(data) {
		console.log('Client sent ' + data.toString());
	});
	client.on('end', function() {
		console.log('Client disconnected');
	});
	client.write('Hello');
});
server.listen(8107, function() {
	console.log('Server listening for connections');
});
