const prom = new Promise((resolve, reject) => {
	if (true) {
		resolve("worked ");
	} else {
		reject("ooops!");
	}
});

prom.then((result) => result + "have fun").then((result2) => {
	console.log(result2);
});

const prom2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "prom2");
});

const prom3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "prom3");
});

//this will wait till all the promise are resolved
Promise.all([prom, prom2, prom3]).then((values) => {
	console.log(values);
});
const urls = [
	"https://jsonplaceholder.typicode.com/todos",
	"https://jsonplaceholder.typicode.com/users",
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((resp) => resp.json());
	})
)
	.then((results) => {
		console.log(results[0]);
		console.log(results[1]);
	})
	.catch(() => console.log("some error"));

//promise can be in 3 state: resolved,rejected,pending
