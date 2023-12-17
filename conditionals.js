let a = 1;

if (a < 1) {
	console.log("-tiv");
} else if (a == 1) {
	console.log("equal");
} else {
	console.log("+tive");
}
//ternary oprator
console.log(a < 1 ? "-tive" : "+tive");

//switch case

switch (a) {
	case a < 1:
		console.log("-tive");
		break;
	case a == 1:
		console.log("equal");
		break;
	case a > 1:
		console.log("+tive");
		break;
	default:
		console.log("if none of the above condition are matched Default block will be execuated");
}
