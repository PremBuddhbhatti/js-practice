//constructor functions should start with capital letter

function Car(brand, model) {
	this.brand = brand;
	this.model = model;
}

//we can add new properties using prototype
Car.prototype.getBrand = function () {
	return "Brand:" + this.brand;
};

const verna = new Car("Hyundai", "Verna");
console.log(verna);
console.log(verna.getBrand());
const swift = new Car("suzuki", "Swift");
console.log(swift);
