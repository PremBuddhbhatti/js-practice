//simple try..catch cann't handle async errors we need to use .catch to handle it
Promise.resolve("asyncError")
	.then((response) => {
		throw new Error("opps an error");
		return response;
	})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});

//ex 2
(async function () {
	try {
		await Promise.resolve("prom 1");
		await Promise.reject("rejected Prom 2");
	} catch (err) {
		console.log(err);
	}
})();
