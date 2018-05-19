//You must inherit the functionality for 
//Readable streams using util module's inherits 
//method
var stream = require('stream');
var util = require('util');
util.inherits(Answers,stream.Readable);
function Answers(opt) {
	//Create an instance of the object call
	stream.Readable.call(this, opt);
	this.quotes = ["yes", "no", "funny", "maybe"];
	this._index = 0;
}

Answers.prototype._read = function() {
	if (this._index > this.quotes.length) {
		this.push(null);
	} 
	else {
		this.push(this.quotes[this._index]);
		this._index += 1;
	}
};
	var r = new Answers();
	console.log("Direct read method: " + r.read().toString());
	r.on('data', function(data) {
		console.log("Callback read more data: " + data.toString());
	});
	r.on('end', function(data) {
		console.log("No more answers");
	});