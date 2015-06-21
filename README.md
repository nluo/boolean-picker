# What
Traverse a given object recursively, picks up the custom defined boolean-like values and object keys, and convert them to property boolean values (i.e. true, false)

# Get Started

## API
```
booleanPicker(object, boolMap, options);

```

* `object`: the original object
* `boolMap`: the boolMap is where you want to define which key you want boolean-picker to convert the key
* `options`: options is where you provide the custom true and false values, e.g. {trues: ['true', 'yes'], falses: ['false', 'no']}

Require and use it:
```
var booleanPicker = require('boolean-picker');
// the mock object
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

```
will output:
```
{ 
  foo: true,
  bar: 'no',
  baz: { majigger: true },
  animals: [ {name: 'dog', isAlive: 'yes'}, { name: 'fish', isAlive: 'yes' } ] 
}
```

If what you want boolean-picker to pick up and convert is the value inside the array, e.g. the 'animals' key, you could do:


```
var boolMap = {
  foo: true,
  baz: true,
  animals: [{isAlive: true}]
};

```

which will convert both objects in animals to true

output:

```
{ 
  foo: true,
  bar: 'no',
  baz: { majigger: 'true' },
  animals: 
   [ { name: 'dog', isAlive: true },
     { name: 'fish', isAlive: true } ] 
}
```

If you just want to convert a specific object inside the array, say the {name: 'dog', isAlive: 'yes'}, you can define an object with position key:


```
var boolMap = {
  foo: true,
  baz: true,
  animals: {
    0: {
      isAlive: true
    }
  }
};

```

output: 

```
{ 
  foo: true,
  bar: 'no',
  baz: { majigger: 'true' },
  animals: 
   [ { name: 'dog', isAlive: true },
     { name: 'fish', isAlive: 'yes' } ] 

}

```
