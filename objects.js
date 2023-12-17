let person = {
	//object properties
	name: "prem",
	role: "intern",
	city: "khambhaliya",

	//object methods
	printPerson: function () {
		console.log("name:" + this.name + " role:" + this.role);
	},

	getCity: function () {
		return this.city;
	},
};

console.log(person.name); //accessing object properties
console.log(person["role"]);
person.printPerson(); // calling object method

var o = person.getCity(); //getting value from object method
console.log(o);

function updateRole(r) {
	r.role = "trainee engineer";
}

updateRole(person); // passing an object to function
console.log(person.role); //role updated
