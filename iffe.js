/* IIFE are immediatily invoked and execuated functions */

var foo = "foo";
(function changeFoo() {
	var foo = "IFFE"; //we can't access this value outside iffe
	console.log(foo);
})();
console.log(foo);

/* we can assign a IIFE to a var */
var myname = (function getname() {
	var nm = "Prem";
	return nm;
})();

console.log(myname);
