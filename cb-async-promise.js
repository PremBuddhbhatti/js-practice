const getUser = () => {
	setTimeout(() => {
		return { name: "Max" };
	}, 2000);
};

const user = getUser(); // This doesn't actually fetch the user
console.log(user.name); // ?This will give user undefined bcz Js dosen't wait for the response of setTimeout

// call back

const getUser = (cb) => {
	console.log(cb);
	setTimeout(() => {
		cb({ name: "Max" });
	}, 2000);
};

getUser((user) => {
	console.log(user.name); // Prints 'Max' after 2 seconds
});
console.log('This prints before "Max" gets printed!'); // <- This does indeed print before 'Max'

//callback hell

const checkAuth = (cb) => {
	// In reality, you of course don't have a timer but will probably reach out to a server
	setTimeout(() => {
		cb({ isAuth: true });
	}, 2000);
};
const getUser = (authInfo, cb) => {
	if (!authInfo.isAuth) {
		cb(null);
		return;
	}
	setTimeout(() => {
		cb({ name: "Max" });
	}, 2000);
};
checkAuth((authInfo) => {
	getUser(authInfo, (user) => {
		console.log(user.name);
	});
});

//pormise

const getUser = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ name: "Max" });
		}, 2000);
	});
};
getUser().then((user) => {
	console.log(user.name);
});

//async with error hendling

async function fetchUser() {
	try {
		const auth = await checkAuth(); // <- async operation
		const user = await getUser(auth); // <- async operation
		return user;
	} catch (error) {
		return { name: "Default" };
	}
}
fetchUser().then((user) => console.log(user.name));
