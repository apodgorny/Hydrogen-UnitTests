var H = require('../../H');

H.assert(
	H.getKind('Object'), 
	'creation of H.Object kind'
);

H.kind('Test1', {
	foo: 'bar'
});

H.assert(
	H.getKind('H.Test1'), 
	'creation of kind with implied base kind parameter'
);

H.kind('Test2', 'H.Object', {
	foo: 'bar'
});

H.assert(
	H.getKind('H.Test2'), 
	'creation of kind with explicit base kind parameter'
);

H.kind('Test3', H.Object, {
	foo: 'bar'
});

H.assert(
	H.getKind('H.Test3'), 
	'creation of kind with reference base kind parameter'
);



