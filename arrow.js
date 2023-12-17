var obj = {
	// does not create a new scope
	i: 10,
	b: () => console.log(this.i, this), //arrow functions doesn't have this
	c: function () {
		console.log(this.i, this);
	},
};

obj.b(); // prints undefined, Window {...}
obj.c(); // prints 10, Object {...}
