var fs = require('fs');
var Path = require('path');
console.log(fs.existsSync('file_read_stream.js'));
fs.exists('file_read_stream.js', function (exists) {
	console.log(exists ? "Path Exists" : "Path Does Not Exists");
});
fs.stat('file_read_stream.js', function(err, stats) {
	console.log('stats: ' + JSON.stringify(stats, null, '  '));
	console.log(stats.isFile() ? "Is a file" : "Is not a file");
	console.log(stats.isDirectory() ? "Is a Folder" : "Is not a folder");
	console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
	console.log(stats.isBlockDevice() ? "Is a Blocked Device" : "Is not a Blocked Device");
	});
function WalkDirs(dirPath) {
	console.log(dirPath);
	fs.readdir(dirPath, function (err, entries) {
		for (var idx in entries) {
			var fullPath = Path.join(dirPath, entries[idx]);
			(function(fullPath) {
				fs.stat(fullPath, function (err, stats) {
					if (stats && stats.isFile()){
						console.log(fullPath);
					}
					else if (stats && stats.isDirectory()){
						WalkDirs(fullPath);
					}
				});
			})(fullPath);
		}
	});
}
WalkDirs("../Chapter6");

//To Delete a file 
fs.unlink("new.txt", function(err) {
	console.log(err ? "File Delete Failed" : "File Deleted");
});