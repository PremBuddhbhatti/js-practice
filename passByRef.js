/* Pass by rerfrence */

/* by default objects in js are pass by refrence */
let obj1 = {
	myname: "prem",
	pass: "123",
	address: {
		city: "abc",
	},
};

let obj2 = obj1;
obj2.pass = "456";
//this will give same output
console.log(obj1);
console.log(obj2);

/* Array is also passed by refrence */

let arr = [1, 2, 3];
let arr2 = arr;

arr2.push(4);

console.log(arr);
console.log(arr2);

/* we can use concat to pass array by value */

let arr3 = [1, 2, 3];
let arr4 = [].concat(arr3);

arr4.push(4);

console.log("arr3:" + arr3);
console.log("arr4:" + arr4);

/* object.assign is used to pass objects by value */

let obj3 = Object.assign({}, obj1);
obj3.pass = 789;

console.log(obj3); //  this will not affect previous objects

/* sprade oprator can also be used to pass by value */

let obj4 = { ...obj1 };
obj4.myname = "xyz";

console.log(obj4);

/* above methods will perform a shallow clone so deep objects will not be cloned */

obj1.address.city = "xyz"; //this cahnge will affect all above objects

/* we need to use JSON for deep clone */

let obj5 = JSON.parse(JSON.stringify(obj1));

obj1.address.city = "mycity";

console.log(obj5); // only obj5 will have old copy of obj1
