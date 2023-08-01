/* target the input fields */

const merchantKey = document.querySelector('#merchant_key'); 


/* a function to generate random data without the need to type it down */
function genRandom(){

  let ranAdd = ['azizyah','malaz','exit 14','nazha', 'nakhil','alworood'];
  let address = ranAdd[Math.round(Math.random() * ranAdd.length)];
  let orderId = ranOderId();
  
  

}




let ranOrderId = ()=> {
  let orderId = (Math.random() + 1).toString(36).substring(7);
  return orderId;
}
