/* factory functions behaves like a class but it occupies more memory */
function createCar(company, model) {
	return {
		company,
		model,
		getCar() {
			return " company:" + company + " model:" + model;
		},
	};
}

const verna = createCar("Hyunday", "Verna");
verna.getCar();

const a8 = createCar("Audi", "A8");
a8.getCar();
