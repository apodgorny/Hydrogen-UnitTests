var H = require('../../H');

H._mytest = null; // H-global for testing purposes

H.kind('MyKind', {
	prop1: 1,
	events: {
		LOAD : function(nSeconds) {
			return {
				thisObject	: this,
				timeElapsed	: nSeconds
			}
		}
	},
	load: function() {
		this.emitLoad(234);
		H.assert(H._mytest.timeElapsed == 234, 	'object\'s event emitters');
		H.assert(H._mytest.sender === this, 	'object\'s event sender');
		H.assert(H._mytest.thisObject === this, '"this" binding in event definitions');
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

H.assert(
	H._mytest.sender === o, 
	'inherited event emitters'
);