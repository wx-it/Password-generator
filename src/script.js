const outputBtn = document.querySelector('#output-btn');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


function generatePassword() {
    function firstPassword() {

    let min = 10000000;
    let max = 90000000;
    let output =  Math. floor(Math. random() * min) + max;
    
    password.value = output;

    return output;
    }

    function secondPassword() {

    let min = 10000000;
    let max = 90000000;
    let output =  Math. floor(Math. random() * min) + max;
    
    password2.value = output;

    return output;
    }
    firstPassword();
    secondPassword();
}

outputBtn.addEventListener('click', generatePassword);

//copy password

function copyPassword(copyPassword){
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);

   navigator.clipboard.writeText(copyPassword.value);
 
   alert("Copied the text: " + copyPassword.value);

}

const copyBtn = document.querySelector('#copy-text');
copyBtn.addEventListener('copy', copyPassword);
