let arr = [1, 2, 3];

console.log(arr); // printing array
console.log(Array.isArray(arr)); //checking if variable is array or not
console.log(arr.length); // printing length of array

arr[2] = "a"; //changing value

arr.push(4); //adds value to array
console.log(arr);

arr.pop(); //delets value from array
console.log(arr);

arr.shift(); //removes first element of array
console.log(arr);

arr.unshift(1); // adds value to left of array
console.log(arr);

const arr2 = arr.slice(0, 1); //this will create new array, strating from 0 index to 1st index but 1st index is not included
console.log(arr2);

arr.splice(2, 0, "new"); //adding new value in array
console.log(arr);

//searching array
console.log(arr.indexOf(2));
console.log(arr.indexOf("abc")); // if element is not found it will return -1

arr = [1, 2, 3, 4];
const fltr = arr.filter(function (item) {
	//loops through all elements and checks for condition
	return item > 2;
});

console.log(fltr);

const fnd = arr.find(function (item) {
	//loops through all elements and checks for conditio
	return item > 3;
});

console.log(fnd);

arr.forEach(function (item) {
	// loops through all elements
	console.log(item);
});
