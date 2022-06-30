const outputBtn = document.querySelector('#output-btn');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const number = document.querySelector('#number');

let min = 10000;
let max = 90000;
let i = 0;

function generatePassword() {
  let store = [];
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  store.push(chars);
  
  
    let pword = "";
     let pwordL = i;
   
    function firstPassword() {
    for (let i = 1; i <= pwordL; i++){

        let output =  Math.floor(Math.random() * chars.length);
        pword += chars.substring(output, output +1);
    } 
    password.value = pword;
    }

    function secondPassword() {
        for (let i = 1; i <= pwordL; i++){
    
            let output =  Math.floor(Math.random() * chars.length);
            pword += chars.substring(output, output +1);
        } 
        password2.value = pword;
        }
        //YOU STOPPED HERE YESTERDAY, FINISH
        console.log(store.split(','));
    firstPassword();
    secondPassword();
    }


outputBtn.addEventListener('click', generatePassword);

//copy password
/*
function copyPassword(copyPassword){
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);

   navigator.clipboard.writeText(copyPassword.value);
    document.execCommand('copy'); 
   alert("Copied the text: " + copyPassword.value);

}

const copyBtn = document.querySelector('#copy-text');
copyBtn.addEventListener('copy', copyPassword);
*/



//increment

function incNumber() {
    if (i < 20) {
        i++;
    } else if (i = 10) {
        i = 0;
    }
    number.textContent = i;
    
}

increment.addEventListener('click', incNumber);

//decrement

function decNumber() {
    if (i < 10) {
        i--;
    } else if (i = 10) {
        i = 0;
    }
    number.textContent = i;
}

decrement.addEventListener('click', decNumber);

