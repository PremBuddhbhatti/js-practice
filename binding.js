let person = {
	name: "prem",
	role: "intern",
};

let getPerson = function (msg) {
	//? here this will refer to person obj
	console.log(`Name:${this.name}\tRole:${this.role}\tMessage:${msg}`);
};

getPerson.call(person, "welcome");
getPerson.apply(person, ["apply"]);

let gp = getPerson.bind(person, "bind");
//!bind will only bind the object with function and return a method which can be invocked later

console.log(gp()); //invoking gp

/* function foo() {
	var bar = "bar1";
	baz();
}

function baz() {
	//? this will refrence to global scope
	console.log(this.bar);
}

var bar = "bar2";
foo(); //!this will print bar2 bcz it is in global scope

//explicit binding

function foo() {
	console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" };

foo(); //? here it will refer to global scope
foo.call(obj); //! this will bind to obj

//? hard binding ex 2

function bind(fn, o) {
	return function () {
		fn.call(o);
	};
}

function foo() {
	console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

foo.bind(fn, obj); //this will dynamically bind objects

foo(); //? here it will bind obj
foo.call(obj2); //! this will also bind to obj
 */
