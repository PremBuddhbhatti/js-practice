const a = "abc";
let b = "b";

const Objz = {
	a,
	b,
	foo: "foo",

	xyz: function () {
		console.log(this.a);
		console.log(this.b);
	},
};

function fn() {
	a;
	b;
	console.log(b);
	console.log(a);
}

fn();
Objz.xyz();
console.log(Objz.a);
Objz.foo = "acb";
