function LateBloomer() {
	this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
	window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
	console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'

//! using bind to create a shortcut

let con = console.log.bind(document);
con("bond to document");
