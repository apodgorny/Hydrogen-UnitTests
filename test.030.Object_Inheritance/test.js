var H = require('../../H');


H.kind('BaseKind', {
	prop1: 1,
	prop2: 2,
	increment: function() {
		this.prop1 ++;
	}
});

H.kind('Kind', H.BaseKind, {
	prop1: 3,
	increment: function() {
		this.inherited();
		this.prop1 += 10;
	}
});

var o = H.Kind.construct();

// Testing property inheritance
H.assert(o.prop1 == 3, 'Inherit property');

// Testing not inherited property sustainment
H.assert(o.prop2 == 2, 'Sustain property');

// Testing this.inherited
o.increment();
H.assert(o.prop1 == 14, 'Test this.inherited()');
