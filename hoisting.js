/* Hoisting exaple */
/* only var and functions are hoisted */
/* variables are partially hoisted */

console.log(a);
console.log(ab());

var a = "Hoisted var";

console.log(a);
function ab() {
	console.log("i'm hoisted");
}

console.log(a2); //OP: undefined
console.log(a2()); // output: not a function

//functions exprations are also not hoisted
var a2 = function () {
	console.log("not hoisted a2");
};

console.log(x);
console.log(z);
const x = "not hoisted";
let z = "not hoisted";
