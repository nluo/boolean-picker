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


// booleanPicker = new BooleanPicker();

// property = {
//   smoking: 'yes',
//   alarm: 'true',
//   features: ['hotWater', 'pool', {airCon: '1', pets: 'no'}],
//   bedrooms: '3',
//   bathrooms: '1'
// };


// console.log(booleanPicker(property));