var H = require('../../H');

H.assert(
	H.getKind('Object'), 
	'creation of H.Object kind'
);

H.kind({
	name	: 'Level1'
});

H.kind({
	name	: 'Level1.Level2'
});

H.kind({
	name	: 'Level1.Level2.Level3.Level4.Level5'
});
	
H.assert(
	H.Level1.kindName == 'H.Level1',
	'kind creation'
);

H.assert(
	H.Level1.Level2.kindName == 'H.Level1.Level2',
	'kind namespaced kind creation'
);

H.assert(
	H.Level1.Level2.Level3.kindName == 'H.Level1.Level2.Level3',
	'kind namespaced namespace creation'
);

H.assert(
	H.Level1.Level2.Level3.Level4.Level5.kindName == 'H.Level1.Level2.Level3.Level4.Level5',
	'non-kind namespaced kind creation'
);
