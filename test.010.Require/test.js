var H = require('../../H');
H.assert(true, 'Load Hydrogen');

H.require('UnitTests/test.010.Require/dummy');
H.assert(true, 'Load package');

H.assert(H.dummy == 54, 'Eval package contents');
