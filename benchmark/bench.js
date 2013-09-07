var gender = require('./../gender');
var names = getNames();

var cycles = 1;
console.time('names benchmark');
for (var i = 0; i < 2; i++) {
  for (name in names) {
    gender.guess(name)
  }
}
console.timeEnd('names benchmark');

function getNames() {
	var fs = require('fs');
  return fs.readFileSync('names.txt').toString().split('\n');
}