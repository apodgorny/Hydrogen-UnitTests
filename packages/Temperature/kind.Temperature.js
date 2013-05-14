H.kind({
	name: 'H.Temperature',
	
	inF		: null,
	inC		: null,
	inK		: null,
	
	outF	: H.bindTo('add4.out'),
	outC	: H.bindTo('add5.out'),
	outK	: H.bindTo(['mul1.out', 'add2.out', 'inK']),
	
	components: [
		// Convert from F	K = (F + 459.67) * 5/9
		
		{name: 'add1', kind: H.Add, 	 inA: H.bindTo('inF'),		inB: 459.67  },
		{name: 'mul1', kind: H.Multiply, inA: H.bindTo('add1.out'),	inB: 5/9 	 },
		
		// Convert from C	K = C + 273.15
		
		{name: 'add2', kind: H.Add, 	inA: H.bindTo('inC'),		inB: 237.15  },
		
		// Convert to F		F = 9/5 * (K - 273.15) + 32
		
		{name: 'add3', kind: H.Add, 	 inA: H.bindTo('outK'),		inB: -273.15 },
		{name: 'mul2', kind: H.Multiply, inA: H.bindTo('add3.out'),	inB: 9/5 	 },
		{name: 'add4', kind: H.Add, 	 inA: H.bindTo('mul2.out'),	inB: 32 	 },
		
		// Convert to C		C = K - 273.15
		
		{name: 'add5', kind: H.Add, 	 inA: H.bindTo('outK'),		inB: -273.15,
			// onInAChange: function(oEvent) {
			// 	console.log('add5.inA', this.inA);
			// 	console.log('add5.out', this.out);
			// },
			// onOutChange: function(oEvent) {
			// 	console.log('add5.out', this.out);
			// }
		},
	],
	
	// onOutKChange: function(oEvent) {
	// 	console.log('outK:', this.outK);
	// }
});