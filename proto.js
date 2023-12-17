let abc = {
	name: 'prem',

	b() {
		return 'abc:' + this.name;
	},
};

let A = {
	name: 'prashil',
	std: 11,
	c() {
		return 'A:' + this.name; // A has property name so it will not look for it outside its scope
	},
};

let B = {
	D() {
		return 'B:' + this.name; // this will look up the property name
	},
};

A.__proto__ = abc;
B.__proto__ = A;

console.log(abc.b()); //prem
console.log(A.b()); //prashil
console.log(B.b()); //prashil
console.log(B.D()); //prashil
console.log(abc.c()); // abc cann't access c() bcz its not in its property
