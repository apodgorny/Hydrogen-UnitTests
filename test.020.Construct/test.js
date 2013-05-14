var H = require('../../H');

H.kind('Test', {
	foo: 'bar'
});

var oTest = H.Test.construct();
H.assert(
	oTest.foo == 'bar', 
	'object construction'
);
