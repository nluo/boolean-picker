# What
Traverse an object and picks up the alike boolean values(e.g. 'yes', 'okay, 'no') to proper boolean (true, false). It also supports additional custom true/false values (e.g. '1', '0') by passing extra options.

# Get Started
Require and use it:
```
var booleanPicker = require('boolean-picker')();
var property = {
  smoking: 'yes',
  alarm: 'true',
  features: ['hotWater', 'pool', {airCon: '1', pets: 'no'}],
  bedrooms: '3',
  bathrooms: '1'
};

console.log(booleanPicker(property));

```
will output:
```
{ 
  smoking: true,
  alarm: true,
  features: ['hotWater', 'pool', {airCon: '1', pets: false}],
  bedrooms: '3',
  bathrooms: '1'
}
```

Default true and false values to check and convert in this module are ['yes', 'true'] and ['no', 'false']. You could pass custom true/false values for this module to convert:

```
var booleanPicker = require('boolean-picker')({trueValues: ['1', 'okay']});
```
It will now output:

```
{ 
  smoking: true,
  alarm: true,
  features: [ 'hotWater', 'pool', { airCon: true, pets: false } ],
  bedrooms: '3',
  bathrooms: true
}
  
```
Everything looks good except bathrooms has been converted to true. To solve this, you could pass exclusions (array) inside the option when initialise boolean-picker:

```
var booleanPicker = require('boolean-picker')({trueValues: ['1', 'okay'], exclusions: ['bathrooms']});

```
It will output:

```
{ 
  smoking: true,
  alarm: true,
  features: [ 'hotWater', 'pool', { airCon: true, pets: false } ],
  bedrooms: '3',
  bathrooms: '1' 
}
```


