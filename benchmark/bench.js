var gender = require('./../gender');
var names = getNames();

var cycles = 1000;
var timerName = 'names benchmark (' + cycles + ' cycles)';
console.time(timerName);
for (var i = 0; i < cycles; i++) {
  names.forEach(function (name) {
    gender.guess(name);
  });
}
console.timeEnd(timerName);

function getNames() {
	var fs = require('fs');
  return fs.readFileSync('names.txt').toString().split('\n');
}