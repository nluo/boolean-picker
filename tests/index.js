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

    var mockObject = {
	  foo: 'yes',
	  bar: 'no',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		bar: true,
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('default trues and falses test 2', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'no way',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'no way',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		bar: true,
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});


test('test with boolMap array', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: true}],
		majigger: 'yes'
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with boolMap array, but the value of original object is not object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: 'haha',
		majigger: 'yes'
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: 'haha',
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with default trues, falses + convert value in object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: true}],
		majigger: 'yes'
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('test with boolmap contains object', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: [{name: 'dog', isAlive: true}, {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var mockObject = {
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
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});

test('edge case: test with boolmap contains a number', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
		majigger: 'yes'
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: 0
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), expectedResult);
});


test('test when key does not exist', function(t){
    t.plan(1);


    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: [{name: 'dog', isAlive: 'yes'}, {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		mockObject: true
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues, falses: defaulFalses})), mockObject);
});


test('test with no options passed', function(t){
    t.plan(1);

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		animals: [{isAlive: true}]
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap), mockObject);
});


test('test with only true options passed', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: true
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'yes'
	};

	var boolMap = {
		foo: true,
		majigger: true
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: defaultTrues})), expectedResult);
});

test('test with only false options passed', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: 'yes',
		bar: 'false',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: false
    };

    var mockObject = {
	  foo: 'yes',
	  bar: 'false',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'false'
	};

	var boolMap = {
		foo: true,
		majigger: true
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({falses: defaulFalses})), expectedResult);
});


test('test with custom true/fasle options', function(t){
    t.plan(1);

    var expectedResult = {
    	foo: true,
		bar: 'false',
		baz: 'yes',
		animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
		majigger: false
    };

    var mockTrues = ['okay', 'yes'];
    var mockFalses = ['not really'];

    var mockObject = {
	  foo: 'okay',
	  bar: 'false',
	  baz: 'yes',
	  animals: ['dog', 'cat', {name: 'fish', isAlive: 'yes'}],
	  majigger: 'not really'
	};

	var boolMap = {
		foo: true,
		majigger: true
	};
 
    t.deepEqual(booleanPicker(mockObject, boolMap, ({trues: mockTrues, falses: mockFalses})), expectedResult);
});
