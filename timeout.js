console.log("1");
setTimeout(() => {
	// setTimeout will call API and this will not add the function to the call stack unless the time is out
	// after that it will call callback function to add the function to call stack
	console.log("2");
}, 2000);

setTimeout(() => {
	console.log("3"); // this be still print at last bcz it has to go through all the process
}, 0);

console.log("4");
