//closure is a feature of Js which keeps properties which are in use by child functions
function a() {
	let grandparent = "GP";
	return function b() {
		let parent = "p";
		let xyz = "i'll be garbage collected"; // this will be deleted from memory as it is not used by c function
		return function c() {
			let child = "c";
			return `${grandparent} -> ${parent} ->${child}`;
		};
	};
}
console.log(a()()());
