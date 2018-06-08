//implement basic synchronous reading to a chunk of
//string data from a file 

//fd = file descriptor

var fs = require('fs');
fd = fs.openSync('../data/veggie.txt', 'r');
var veggies = "";
do {
	var buf = new Buffer(4);
	buf.fill();
	var bytes = fs.readSync(fd, buf, null, 4);
	console.log("read %dbytes", bytes);
	veggies += buf.toString();
//Once there is nothing left in the buffer bytes
//It will print Veggies data to the console 
} while (bytes > 0);
//Keeps reading until buffer is empty.
//Buffer has 6 index items to iterate through
fs.closeSync(fd);
console.log("Veggies: " + veggies);
