var H = require('../../H');

H._myTest = '';

H.kind(
	'MyKind1', {
		output: 2,
	}
)

H.kind(
	'MyKind2', {
		input: 0,
	}
);

var o1 = H.MyKind1.construct();
var o2 = H.MyKind2.construct();

H.Event.bind(o2, 'input').to(o1, 'output');

// H.assert(
// 	o2.input == 2,
// 	'changing input value on bind'
// );

o1.output = 3;

H.assert(
	o2.input == 3,
	'changing input value on bound output change'
);