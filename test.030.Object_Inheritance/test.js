var H = require('../../H');


H.kind('BaseKind', {
	prop1: 1,
	prop2: 2,
	increment: function() {
		// console.log('BaseKind.increment() BEGIN');
		this.prop1 ++;
		// console.log('BaseKind.increment() END');
	}
});

H.kind('Kind', H.BaseKind, {
	prop1: 3,
	increment: function() {
		// console.log('Kind.increment() BEGIN');
		this.inherited();
		this.prop1 += 10;
		// console.log('Kind.increment() END');
	}
});

H.kind('Kinder', H.Kind, {
	prop1: 100,
	increment: function() {
		// console.log('Kinder.increment() BEGIN');
		this.inherited();
		// console.log('Kinder.increment() END');
	}
});

var o = H.Kind.construct();

// Testing property inheritance
H.assert(
	o.prop1 == 3, 
	'object property inheritance'
);

// Testing not inherited property sustainment
H.assert(
	o.prop2 == 2, 
	'object property overriding'
);

// Testing this.inherited
o.increment();
H.assert(
	o.prop1 == 14, 
	'object this.inherited()'
);

var o1 = H.Kinder.construct();
o1.increment();

// Testing nested this.inherited
H.assert(
	o1.prop1 == 111, 
	'nested this.inherited()'
);