/* target the input fields */

const merchantKey = document.querySelector('#merchant_key');
const operation = document.querySelector('#operation'); 
const number = document.querySelector('#number'); 
const amount = document.querySelector('#amount'); 
const currency = document.querySelector('#currency'); 
const description = document.querySelector('#description'); 
const success_url = document.querySelector('#success_url'); 
const hash = document.querySelector('#hash'); 
const submit = document.querySelector('#submit'); 

console.log(submit)


/* a function to generate random data without the need to type it down */
function genRandom(){

  let ranAdd = ['azizyah','malaz','exit 14','nazha', 'nakhil','alworood'];
  let address = ranAdd[Math.round(Math.random() * ranAdd.length)];
  let orderId = ranOderId();
  
  

}

function sendReq(){
  let ReqObject = {
    "merchant_key": null,
    operation: null,
    "order": {
      "number": null,
      "amount": null,
      "currency": null,
      "description": null
    },
    "success_url": null,
    hash: null,
    
  }
}

let ele = submit;
      if(ele.addEventListener){
          ele.addEventListener("submit", null);
      }

function submitTest() {
}

let ranOrderId = ()=> {
  let orderId = (Math.random() + 1).toString(36).substring(7);
  return orderId;
}
