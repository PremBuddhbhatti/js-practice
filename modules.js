var myModule = (function () {
	var name = "prem";
	var role = "intern";

	var privateFun = function address() {
		// this functon is not accessible outside this module
		return "khambhaliya";
	};

	return {
		details: function getDetails(n) {
			return "name:" + n + " roel:" + role + " address: " + privateFun();
		},
		nm: name,
	};
})();

console.log(myModule.details("abc")); // we can only access properties which are returned by module
console.log(myModule.nm);
console.log(myModule.role); // this will give undefinned as the variable role is private member in myModule
