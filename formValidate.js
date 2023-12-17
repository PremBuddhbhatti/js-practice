function suggestion(domSp, msg, disp) {
	domSp.style.display = disp;
	domSp.innerHTML = msg;
}

function getValidate(domEle, domSp, msg) {
	if (domEle == "") {
		console.log("e:" + domEle);
		suggestion(domSp, msg, "inline");
	} else if (domEle[0].toUpperCase() !== domEle[0]) {
		console.log("c :" + domEle[0]);
		suggestion(domSp, "First letter should be capital", "inline");
	} else {
		suggestion(domSp, "", "none");
	}
}

function firstname() {
	let domFname = document.getElementById("fname").value;
	let domSp = document.getElementById("sFname");
	getValidate(domFname, domSp, "provide first name");
}

function lastname() {
	let domLname = document.getElementById("lname").value;
	let domSp = document.getElementById("sLname");
	getValidate(domLname, domSp, "provide Last name");
}

function checkPass(pId, sId) {
	let domPass = document.getElementById(pId).value;
	let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	let domSp = document.getElementById(sId);
	if (domPass.match(reg)) {
		suggestion(domSp, "", "none");
	} else {
		suggestion(
			domSp,
			"Password shoud have at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
			"inline"
		);
	}
}

function matchPass() {
	let domPass = document.getElementsByClassName("pwd");
	let domSp = document.getElementById("sPwdc");
	if (domPass[0].value === domPass[1].value) {
		suggestion(domSp, "", "none");
	} else {
		suggestion(domSp, "Password dosen't match", "inline");
	}
}

function checkPhone() {
	let domPh = document.getElementById("phone").value;
	let domSp = document.getElementById("sPhone");
	let reg = /^(?=.*\d).{10,10}$/;
	if (domPh.match(reg)) {
		suggestion(domSp, "", "none");
	} else {
		suggestion(domSp, "Phone number sould be of 10 digits", "inline");
	}
}

function getEmail() {
	let domEm = document.getElementById("email").value;
	let domSp = document.getElementById("sEmail");
	let i = domEm.indexOf("@") + 1;
	console.log(i);
	let domain = domEm.slice(i);
	suggestion(domSp, "your domain is: " + domain, "inline");
}
