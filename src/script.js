// Global Variables

const outputBtn = document.querySelector('#output-btn');
const firstPasswordInput = document.querySelector('#password');
const secondPasswordInput = document.querySelector('#password2');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const number = document.querySelector('#number');
const copyFirstPword = document.querySelector('#copy-first-pword');
const copySecondPword = document.querySelector('#copy-second-pword');




//increment number
let i = 0;

function incNumber() {
    if (i < 20) {
        i++;
    } else if (i = 20) {
        i = 0;
    }
    number.textContent = i;
    
}

increment.addEventListener('click', incNumber);

//decrement number

function decNumber() {
    if (i < 20) {
        i--;
    } else if (i = 20) {
        i = 0;
    }
    number.textContent = i;
}

decrement.addEventListener('click', decNumber);




function generatePassword() {
  let charcters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let firstPassword = "";
    let secondPassword = "";
    let pwordL = i;
   
    function genFirstPassword() {
    for (let i = 1; i <= pwordL; i++){

        let output =  Math.floor(Math.random() * charcters.length);
        firstPassword += charcters.substring(output, output +1);
    } 
    firstPasswordInput.value = firstPassword;
    }

    function genSecondPassword() {
        for (let i = 1; i <= pwordL; i++){
    
            let output =  Math.floor(Math.random() * chars.length);
            secondPassword += chars.substring(output, output +1);
        } 
        secondPasswordInput.value = secondPassword;
        }
    }


outputBtn.addEventListener('click', generatePassword);

//copy first password

function copyFirstPassword() {
    let copyText = firstPasswordInput;
    copyText.select();
    document.execCommand("copy");  
  }
  copyFirstPword.addEventListener('click', copyFirstPassword);

//copy second password

function copySecondPassword() {
    let copyText = secondPasswordInput;
    copyText.select();
    document.execCommand("copy");  
    alert(`the password ${secondPasswodInput} was copied`)
  }
  copySecondPword.addEventListener('click', copySecondPassword);



  