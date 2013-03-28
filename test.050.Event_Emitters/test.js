var H = require('../../H');

H._mytest = null; // H-global for testing purposes

H.kind('MyKind', {
	prop1: 1,
	events: {
		LOAD : function(nSeconds) {
			return {
				timeElapsed: nSeconds
			}
		}
	},
	load: function() {
		this.emitLoad(234);
		H.assert(H._mytest.timeElapsed == 234, 'Test own object\'s event emitters');
		H.assert(H._mytest.sender === this, 'Test own object\'s event sender');
	}
})

H.Event.on('LOAD', function(oEvent) {
	H._mytest = oEvent;
});

H.Event.on('CHANGE', function(oEvent) {
	H._mytest = oEvent;
});

var o = H.MyKind.construct();

o.load();

o.prop1 = 3;
H.assert(H._mytest.sender === o, 'Test inherited object\'s event emitters');

