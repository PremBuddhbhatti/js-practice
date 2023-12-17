/* a Higher Order Function accepts a function as parameter or returns a function */
const giveAccess = (name) => "Access granted to:" + name;

function auth(verify) {
	let arr = [];

	for (let i = 0; i < verify; i++) {
		arr.push(i);
	}
	return true;
}

const sing = (name) => name + " can sing";

function letPerson(person, fn) {
	// using this we can dynamically pass values and decide which function to call
	if (person.level === "admin") {
		fn(50000);
	} else if (person.level === "user") {
		fn(100000);
	} else {
		return fn(person.name);
	}
	return giveAccess(person.name);
}

console.log(letPerson({ level: "admin", name: "prem" }, auth));
console.log(letPerson({ name: "prashil" }, sing));
