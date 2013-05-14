var H = require('../../H');

H._myTest = '';

H.kind(
	'MyKind', {
		prop: 2,
		onConstruct: function(oData) {
			H._myTest = oData;
		},
		onChange: function(oData) {
			H._myTest = oData;
		}
	}
);

var o = H.MyKind.construct();
H.assert(
	H._myTest.sender == o && H._myTest.event == 'CONSTRUCT',
	'own CONSTRUCT event handler'
);
o.prop = 4;
H.assert(
	H._myTest.sender == o && H._myTest.event == 'CHANGE',
	'own CHANGE event handler'
);