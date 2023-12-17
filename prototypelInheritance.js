function Person(name, role) {
	//constructor function
	this.name = name;
	this.role = role;
}

Person.prototype.getPerson = function () {
	// adding new features
	return `Name:${this.name}\tRole:${this.role}`;
};

function Auth(...args) {
	let arg = args.slice(0, 2); //slice from rest parameters to get first to arguments
	Person.apply(this, arg);
	this.pass = args[2];
}

Auth.prototype = Object.create(Person.prototype); //applying properties of Perso to Auth

Auth.prototype.login = function (c) {
	return `Welcome ${this.name}\tloged in as: ${c}`;
};

Person.prototype.checkRole = function () {
	if (this.role === "intern") {
		return "admin";
	} else {
		return "user";
	}
};

let per1 = new Auth("Prem", "intern", 1234);

console.log(per1.getPerson()); //we can access this method bcz it is inherited

cr = per1.checkRole(); //? we can access new methods bcz objects are pass by refrence

per1.login(cr);
