H.kind({
	name: 'H.Add', 
	
	inA: null,
	inB: null,
	out: 0,
	
	calculate: function() {
		this.out = this.inA + this.inB;
		// console.log(this.name, 'Add calc', this.out);
	},
	
	onInAChange: function() {
		this.calculate();
	},
	
	onInBChange: function() {
		this.calculate();
	}
});