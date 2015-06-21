# What
Traverse a given object recursively, picks up the custom defined boolean-like values (e.g. `'yes'`, `'no'`, `'ok'`, `1`) and object keys, and returns a new object with those values converted to boolean values (i.e. `true`, `false`). You can use a nested whitelist of specified keys-to-convert to limit conversion-to-boolean to those keys for your objects.

# Quick Reference

## API
```
booleanPicker(object, boolMap, options);

```

* `object`: the original object
* `boolMap`: the boolMap is where you want to define which keys you want boolean-picker to convert the key. Acts as a nested whitelist.
* `options`: options is where you provide the custom true and false values, e.g. {trues: ['true', 'yes'], falses: ['false', 'no']}

Require and use it now:
```
var booleanPicker = require('boolean-picker');
// the mock object
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

```
will output:
```
{ 
  foo: true,
  bar: 'no',
  baz: { majigger: true },
  animals: [ {name: 'dog', isAlive: 'yes'}, { name: 'fish', isAlive: 'yes' } ] ,
  zed: true
}
```

If what you want boolean-picker to pick up and convert the nested values inside the array, i.e. the 'animals' key, you could do:


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

## Tests

    npm test

Currently tests are all passed and with 100% coverage
