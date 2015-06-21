var booleanPicker = require('./')
var property = {
  smoking: 'yes',
  alarm: 'true',
  features: ['hotWater', 'pool', {airCon: '1', pets: 'no'}],
  features22: [{airCon: '1', pets: 'no'}, {airCon: '1', pets: 'no'}],
  bedrooms: '3',
  bathrooms: '1',
  allowances: {
  	thing: 'yes',
  	bar: 'false'
  }
};
 
console.log(
	booleanPicker(
		property, 
		{
			smoking: true, 
			alarm: true,
			features: [{
				pets: true
			}],
			features22: {
				1: {
					pets: true
				}
			},
			allowances: {
				thing: true
			}
		}, 
		{
			trues: ['yes', 'true'], 
			falses: ['no', 'false']
		}
	)
);


// var booleanPicker = require('boolean-picker');
var object = {
    foo: 'yes',
    bar: 'no',
    baz: {majigger: 'true'},
    animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
};

var boolMap = {
  foo: true,
  baz: {
  	majigger: true
  } 
};


var result = booleanPicker(object, boolMap, {trues: ['true', 'yes'], falses: ['false', 'no']});

console.log(result);

// booleanPicker = new BooleanPicker();

// property = {
//   smoking: 'yes',
//   alarm: 'true',
//   features: ['hotWater', 'pool', {airCon: '1', pets: 'no'}],
//   bedrooms: '3',
//   bathrooms: '1'
// };


// console.log(booleanPicker(property));