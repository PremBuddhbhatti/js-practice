//entry control loops
for (let i = 0; i < 5; i++) {
	console.log("for:" + i); //we can't access variables defined in for block outside this block
}

let j = 0;
while (j < 5) {
	console.log("while:" + j);
	j++;
}

//exit control loop

let x = 1;

//this loop will be execuated atleast once
do {
	console.log("do..while:" + x);
	x--;
} while (x > 1);
