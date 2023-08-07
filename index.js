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
const hash = document.querySelector("#hash");

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
button.addEventListener("click", genRandom);

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
	return result;
};
