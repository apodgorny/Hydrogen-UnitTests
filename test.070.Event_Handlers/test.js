var H = require('../../H');

H._myTest = '';

H.kind(
	'MyKind1', {
		events: {
			CUSTOM: function(oData) { return oData; }
		},
		onConstruct: function() {
			this.emitCustom({number: 111});
		}
	}
)

H.kind(
	'MyKind2', {
		prop: 2,
		handlers: {
			CHANGE: 'onAnythingChange',
			CUSTOM: 'onAnythingCustom'
		},
		onAnythingChange: function(oData) {
			H._myTest = oData;
		},
		onAnythingCustom: function(oData) {
			H._myTest = oData;
		}
	}
);

var o2 = H.MyKind2.construct();
var o1 = H.MyKind1.construct();

H.assert(
	H._myTest.sender == o1,
	'emitting on construct'
);

H.assert(
	H._myTest.sender == o1 && H._myTest.event == 'CUSTOM',
	'handling of foreign events'
);

o2.prop = 4;

H.assert(
	H._myTest.sender == o2 && H._myTest.event == 'CHANGE',
	'handling of own inherited events'
);