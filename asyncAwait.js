// we can add async await to any function that returns promise to make it async

async function fetchTodos() {
	// to run this copy it to console and call the function
	const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await resp.json();
	console.log(data);
}

//exp 2:

const urls = [
	"https://jsonplaceholder.typicode.com/todos",
	"https://jsonplaceholder.typicode.com/users",
];

const getUrls = async function () {
	try {
		const [todos, users] = await Promise.all(
			urls.map((url) => fetch(url).then((resp) => resp.json()))
		);
		console.log("todos", todos);
		console.log("users", users);
	} catch (err) {
		console.log("some error");
	}
};
