	var H = require('../../H');

	H.kind('BaseKind', {
		p: 2,
		statics: {
			staticProp1: 1,
			staticProp2: 5,
			getThis: function() {
				return this;
			},
			func: function() {
				return 11;
			}
		},
		nonStaticFunc: function() {
			return 32;
		}
	});

	H.kind('Kind', H.BaseKind, {
		statics: {
			staticProp1: 3,
		},
	});
	
	H.kind('Kind1', H.BaseKind, {
		statics: {
			staticProp1: 13,
		},
	});
	

	// Test static inheritance 
	H.assert(
		H.Kind.staticProp1 == 3, 
		'static property overriding'
	);
	
	// Test static inheritance
	H.assert(
		H.Kind.staticProp2 == 5, 
		'static property inheritance'
	);

	// Test absence of static methods in instances
	var o = H.Kind.construct();
	H.assert(
		!H.isDefined(o.staticProp1), 
		'preventing of statics appearing in objects'
	);

	// Test "this" binding in static methods
	H.assert(
		H.Kind.getThis() === H.Kind, 
		'"this" binding in static methods'
	);