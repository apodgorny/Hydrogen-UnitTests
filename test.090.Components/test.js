var H = require('../../H');

H.kind({
	name: 'H.Add', 
	
	inA: null,
	inB: null,
	out: 0,
	
	calculate: function() {
		this.out = this.inA + this.inB;
		this.inA = this.inB = null;
	},
	
	onInAChange: function() {
		if (this.inB !== null) {
			this.calculate();
		}
	},
	
	onInBChange: function() {
		if (this.inB !== null) {
			this.calculate();
		}
	}
});

H.kind({
	name: 'H.Multiply', 
	
	inA: null,
	inB: null,
	out: 0,
	
	calculate: function() {
		this.out = this.inA * this.inB;
		this.inA = this.inB = null;
	},
	
	onInAChange: function() {
		if (this.inB !== null) {
			this.calculate();
		}
	},
	
	onInBChange: function() {
		if (this.inB !== null) {
			this.calculate();
		}
	}
});

// (°F  -  32)  x  5/9
H.kind({
	name: 'H.Fahrenheit2Celsius',
	
	inCelsius		: null,
	inFahrenheit	: null,
	outCelsius		: H.bindTo(['multiply.out', 'inCelsius']),
	
	components: [
		{name: 'add', 		kind: H.Add, 		inA: H.bindTo('inFahrenheit'),	inB: -32 },
		{name: 'multiply', 	kind: H.Multiply, 	inA: H.bindTo('add.out'),		inB: 5/9 }
	]
});

var oF2C = H.Fahrenheit2Celsius.construct();
H.assert(
	oF2C.$.add.owner === oF2C,
	'components and owner, ' + oF2C.kindName
);

oF2C.inFahrenheit = 10;
H.assert(
	oF2C.outCelsius == -12.222222222222223,
	'component binding'
);

oF2C.inCelsius = 25;
H.assert(
	oF2C.outCelsius == 25,
	'component binding with array'
);