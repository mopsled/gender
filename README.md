# Guess

*Statistically* determine a person's gender based on his / her name.

```node
var guess = require('guess');
guess.gender("Don Draper")
# => {gender: "male", confidence: 0.9965635738831615}
guess.gender("Betty Draper")
# => {gender: "female", confidence: 0.9992498124531133}
guess.gender("Mad Men")
# => {gender: "unknown", confidence: null}
```

Statistical data obtained from the [US Census Bureau](http://www.census.gov/genealogy/names/names_files.html), so it works best with American names.

## Installation