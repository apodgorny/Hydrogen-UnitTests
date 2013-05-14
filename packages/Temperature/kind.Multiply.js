H.kind({
	name: 'H.Multiply', 
	
	inA: null,
	inB: null,
	out: 0,
	
	calculate: function() {
		this.out = this.inA * this.inB;
	},
	
	onInAChange: function() {
		this.calculate();
	},
	
	onInBChange: function() {
		this.calculate();
	}
});