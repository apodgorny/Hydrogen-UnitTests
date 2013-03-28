var H = require('../../H');

H.assert(
	('hello_my-wOrld'.toCamelCase() == 'helloMyWorld'),
	'String.toCamelCase()'
);

H.assert(
	('helloMyWorld'.toDashCase() == 'hello-my-world'),
	'String.toDashCase()'
);

H.assert(
	('helloMyWorld'.toUnderscoreCase() == 'hello_my_world'),
	'String.toUnderscoreCase()'
);

H.assert(
	'hello world'.pad('-+', 21) == '-+-+-+-+-+hello world',
	'String.pad() [LEFT]'
);

H.assert(
	'hello world'.pad('-+', 21, true) == 'hello world-+-+-+-+-+',
	'String.pad() [RIGHT]'
);
