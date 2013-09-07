exports.guess = function(fullName) {
  var firstName = getFirstNameFromFullName(fullName);
  firstName = firstName.toLowerCase(); 

  var freqMale = frequencyInFile(firstName, 'census/male.txt');
  var freqFemale = frequencyInFile(firstName, 'census/female.txt');

  var pMale = freqMale / (freqMale + freqFemale);
  var gender, confidence;
  if (freqMale > freqFemale) {
    gender = 'male';
    confidence = pMale;
  } else if (freqFemale > freqMale) {
    gender = 'female';
    confidence = 1 - pMale;
  } else {
    gender = 'unknown';
    confidence = null;
  }
  return {gender: gender, confidence: confidence};
}

function frequencyInFile(firstName, file) {
  frequencies = parseFile(file);
  
  if (frequencies[firstName] == undefined) {
    return 0.0005;
  } else {
    return frequencies[firstName];
  }
}

function parseFile(file) {
  if (file in parseFile.cache) {
    return parseFile.cache[file];
  }

  frequencies = {};
  var fs = require('fs');
  var path = require('path');

  var filePath = path.join(path.dirname(fs.realpathSync(__filename)), file);
  var array = fs.readFileSync(filePath).toString().split('\n');
  for(i in array) {
    var parts = array[i].split(/\s+/);
    var name = parts[0];
    var frequency = parts[1];
    frequencies[name.toLowerCase()] = parseFloat(frequency);
  }
  parseFile.cache[file] = frequencies;
  return frequencies;
}

parseFile.cache = {};

function getFirstNameFromFullName(fullName) {
  var commaIndex = fullName.indexOf(',');
  if (commaIndex >= 0) {
    fullName = fullName.split(/,(.+)/)[1].trim();
  }
  return fullName.split(/\s/)[0];
}
