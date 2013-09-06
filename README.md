# Gender

*Statistically* determine a person's gender based on his / her name.

```javascript
var gender = require('gender')
gender.guess('Don Draper')
// => { gender: 'male',
//      confidence: 0.9965635738831615 }
gender.guess('Betty Draper')
// => { gender: 'female',
//      confidence: 0.9992498124531133 }
gender.guess('Mad Men')
// => { gender: 'unknown', confidence: null }
```

Statistical data obtained from the [US Census Bureau](http://www.census.gov/genealogy/names/names_files.html), so it works best with American names.

## Installation

    $ npm install gender
