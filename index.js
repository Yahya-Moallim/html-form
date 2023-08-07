import crypto from "crypto-js";

/* target the input fields */

const merchantKey = document.querySelector("#merchant_key");
const operation = document.querySelector("#operation");
const number = document.querySelector("#number");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const description = document.querySelector("#description");
const success_url = document.querySelector("#success_url");
const button = document.querySelector("#randomData");
const submit = document.querySelector("#submit");
const password = document.querySelector("#password");

/*  end of targeting the input fields */

let ranDescription = [
	"Blue T-Shirt - Size XL",
	"Laptop Sleeve - 15 inch",
	"Leather Wallet - Brown",
	"Wireless Earbuds - Black",
	"Floral Print Dress - Small",
	"Wooden Picture Frame - 8x10",
	"Premium Coffee Beans - 1 lb",
	"Gaming Mouse - RGB Lights",
	"Fitness Tracker - Heart Rate",
];
let ranAdd = ["azizyah", "malaz", "exit 14", "nazha", "nakhil", "alworood"];

/* a function to generate random data without the need to type it down */
function genRandom(e) {
	e.preventDefault();
	number.value = ranOrderId();
	amount.value = Math.round(Math.random() * 9000);
	description.value = ranDescription[Math.floor(Math.random() * ranDescription.length)];
	success_url.value = "https://success.com";
	operation.value = "purchase";
	currency.value = "SAR";
}

let ranOrderId = () => {
	let orderId = (Math.random() + 1).toString(36).substring(7);
	return orderId;
};

/*generate hash  */
const genHash = (password, orderId, amt, desc) => {
	let curr = "SAR";
	const to_md5 = (orderId + amt + curr + desc + password).toUpperCase();
	const hash = crypto.SHA1(crypto.MD5(to_md5));
	const result = crypto.enc.Hex.stringify(hash);
	console.log(result);
	return result;
};

async function sendReq(e) {
	e.preventDefault();
	let reqObject = {
		merchant_key: testMer,
		operation: operation.value,
		order: {
			number: "2343",
			amount: "22",
			currency: currency.value,
			description: "test gift",
		},
		success_url: success_url.value,
		hash: genHash(testPass, "2343", "22.22", "test gift"),
	};
	const url = "https://checkout.dineropay.com/api/v1/session";
	try {
		const response = await fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			credentials: "omit", // include, *same-origin, omit
			// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: "no-referrer",
			body: JSON.stringify(reqObject), // body data type must match "Content-Type" header
		});
		// let data = await response.json();
		// console.log(data);
	} catch (err) {
		console.log("this the error", err);
	}
}

let testMer = "e71049e0-f972-11ed-9654-0e5e4ac98497";
let testPass = "499120cefc15709bdd5a14a1ad6cc810";

button.addEventListener("click", genRandom);
submit.addEventListener("click", sendReq);
