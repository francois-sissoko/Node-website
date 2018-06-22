process.stdin.on('data', function(data) {
	console.log("Console Input: " + data);
	process.exit(0);
});
process.on('SIGBREAK', function() {
	console.log("Got a SigBreak");
});
process.on('SIGKILL', function() {
	console.log("Got a sigkill");
});
process.on('SIGSTOP', function() {
	console.log("Got a sigstop");
});



