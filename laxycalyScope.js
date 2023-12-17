function a() {
	var a = "a";
	return function b() {
		var b = "b";
		return function c() {
			var c = "c";
			return "final";
		};
	};
}
/* we can access parent properties in child function */
/*here a will point to b and b will point to c */
console.log(a()()());
