var H = require('../../H');

H.assert(H.getKind('Object'), 'Create H.Object kind');

H.kind('Test1', {
	foo: 'bar'
});

H.assert(H.getKind('H.Test1'), 'Create kind with implied base class parameter');

H.kind('Test2', 'H.Object', {
	foo: 'bar'
});

H.assert(H.getKind('H.Test2'), 'Create kind with explicit base class parameter');

H.kind('Test3', H.Object, {
	foo: 'bar'
});

H.assert(H.getKind('H.Test3'), 'Create kind with reference base class parameter');



