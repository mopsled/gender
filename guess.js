var gender = function(name) {
	name = name.toLowerCase();

	var firstName;
    var commaIndex = name.indexOf(",");
    if (commaIndex >= 0) {
    	firstName = name.split(/,(.+)/)[1].trim()
    } else {
    	firstName = name
    }
    firstName = firstName.split(/\s/)[0]

	var freqMale = frequencyInFile(firstName, "guess/male.txt");
	var freqFemale = frequencyInFile(firstName, "guess/female.txt");

	var pMale = freqMale / (freqMale + freqFemale);
	var gender, confidence;
	if (freqMale > freqFemale) {
		gender = "male";
		confidence = pMale;
	} else if (freqFemale > freqMale) {
		gender = "female";
		confidence = 1 - pMale;
	} else {
		gender = "unknown";
		confidence = null;
	}
    return {"gender": gender, "confidence": confidence};
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
	frequencies = {};
	fs = require('fs');
	var array = fs.readFileSync(file).toString().split("\n");
	for(i in array) {
		var parts = array[i].split(/\s+/);
		var name = parts[0];
		var frequency = parts[1];
	    frequencies[name.toLowerCase()] = parseFloat(frequency);
	}
	return frequencies;
}

exports.gender = gender;