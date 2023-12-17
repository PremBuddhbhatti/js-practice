//? A function passed to another function is called callback function.
//? it waits for certain event to hepend

function cbFunc(que, yes, no) {
	if (confirm(que)) {
		yes();
	} else {
		no();
	}
}

cbFunc(
	//this will wait for user response
	"are you sure?",
	function () {
		//these functions will not be accessible out this block
		console.log("Grate");
	},
	function () {
		console.log("be sure");
	}
);
