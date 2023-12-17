class Vehicle {
	#serialnumber = 123; // # is used for declaring private members
	constructor(brand, name) {
		this.name = name;
		this.brand = brand;
	}

	getVehicle() {
		return "Brand:" + this.brand + " name:" + this.name + " sr no.:" + this.#serialnumber;
	}
}

class Car extends Vehicle {
	constructor(brand, name, color, fule) {
		super(brand, name);
		this.color = color;
		this.fule = fule;
	}

	getCar() {
		return this.getVehicle() + " color:" + this.color + " fule:" + this.fule;
	}
}
const verna = new Car("Hyundai", "verna", "white", "disel");
console.log(verna.getCar());
