var test = require('tape');
var booleanPicker = require('../');
var defaultTrues = ['yes', 'true'];
var defaulFalses = ['no', 'false'];

test('default trues and falses test 2', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: false,
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'no',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		bar: true,
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('default trues and falses test 2', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'no way',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'no way',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		bar: true,
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});


test('test with boolMap array', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: true}],
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with boolMap array, but the value of original object is not object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: 'haha',
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: 'haha',
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with default trues, falses + convert value in object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: true}],
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with boolmap contains object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: [{name: 'dog', isAlive: true}, {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: {
			0: {
				isAlive: true
			}
		}
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test when key does not exist', function(t){
    t.plan(1);


    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		thing: true
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues, falses: defaulFalses})), thing);
});


test('test with no options passed', function(t){
    t.plan(1);

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(thing, boolMap), thing);
});


test('test with only true options passed', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: true
    };

    var thing = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		majigger: true
	};
 
    t.deepEqual(booleanPicker(thing, boolMap, ({trues: defaultTrues})), expectedResult);
});
