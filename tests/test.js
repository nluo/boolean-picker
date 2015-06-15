var booleanPicker = require('./')({trueValues: ['1'], exclusions: ['thing']});

var object = {
  thing: 'true',
  majiggar: {thing: '1'},
  bob: 123,
  smith: ['smith', 'dob', 'yes']
};

console.log(booleanPicker(object));