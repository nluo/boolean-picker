var booleanPicker = require('./')
var object = {
    foo: 'yes',
    bar: 'no',
    baz: {majigger: 'true'},
    animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
    zed: 'affirmative'
};

var boolMap = {
  foo: true,
  zed: true,
  baz: {
    majigger: true
  } 
};

var result = booleanPicker(object, boolMap, {trues: ['true', 'yes', 'affirmative'], falses: ['false', 'no']});


console.log(result);
