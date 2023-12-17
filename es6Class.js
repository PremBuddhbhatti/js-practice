class Car {
	constructor(brand, name) {
		this.name = name;
		this.brand = brand;
	}

	getCar() {
		return "Brand:" + this.brand + " name:" + this.name;
	}
}

const verna = new Car("Hyundai", "verna");
console.log(verna.getCar());
