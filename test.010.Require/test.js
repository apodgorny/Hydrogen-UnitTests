var H = require('../../H');

H.assert(
	true, 
	'loading Hydrogen'
);

H.require('UnitTests/test.010.Require/dummy');

H.assert(
	true, 
	'package loading'
);

H.assert(
	H.dummy == 54, 
	'package contents eval'
);
