function fail() {
	try {
		console.log("works!");
		throw new Error("i'm error message");
	} catch (error) {
		console.log(error.message + " at:" + error.stack);
		//.stack will show where the error ouccred
	} finally {
		console.log("this will always run");
		return "finally";
	}
	console.log("this will never run");
}

fail();
