

const otherJobInput = document.getElementById('other-job-role');
otherJobInput.classList.add('hiddenInput');

//select element on change.  When Other is chosen remove display none
//if value is other remove class hiddenInput
const dropDown = document.getElementById('title')
dropDown.addEventListener('change', () => {
    if (dropDown.value == 'other') {
        console.log('wor')
        otherJobInput.classList.remove('hiddenInput');
        // dropDown.addEventListener('change', () =>{
        //     otherJobInput.classList.remove('hiddenInput') })

    }})


// add display none to select element id=shirt-colors
const colorSelect = document.getElementById('shirt-colors')
colorSelect.style = 'display: none'

//add event lister change to select id = 'design'
// when user selects a design color select will appear
const designSelect = document.getElementById('design')
designSelect.addEventListener('change', () =>{
    colorSelect.style = colorSelect.style ? '' : 'none'
    
    if(designSelect.value == 'js puns'){
        document.getElementById('color').innerHTML = `
        <option data-theme="js puns" value="cornflowerblue">Cornflower Blue </option>
        <option data-theme="js puns" value="darkslategrey">Dark Slate Grey </option> 
        <option data-theme="js puns" value="gold">Gold </option>`
    }
    if(designSelect.value == 'heart js'){
        document.getElementById('color').innerHTML = `
        <option data-theme="heart js" value="steelblue">Steel Blue</option>
        <option data-theme="heart js" value="dimgrey">Dim Grey</option>
        <option data-theme="heart js" value="tomato">Tomato </option>`
     }})

     // when checkboxeed is clicked the $price total should increase
         //grab checkboxed value by clicking
         const actBox = document.getElementById('activities-box')
const totalCost = document.querySelector(".activities-cost");
actBox.addEventListener('change', () => {
    
    const checked = actBox.querySelectorAll("input:checked");
    console.log(checked)
    const total = checked.length * 100;
    totalCost.textContent = `$${total}`;   
}
);


// only display credit card option.  on change it will display other options
const testAppend = document.getElementById('paypal')
const payWith = document.getElementById('payment');
const cardNumInput = document.getElementById('cc-num')
const ccNotPicked = document.querySelectorAll('.payment-methods');
payWith.addEventListener('change', ()=>{

    if(payWith.value == 'paypal' || payWith.value == 'bitcoin'){
        document.querySelector('#credit-card').style = 'display: none'
    }
    if(payWith.value == 'bitcoin'){

    }
})

// check if name input is not empty
const nameInput = document.getElementById('name');
nameInput.focus();
const emailInput = document.getElementById('email')
const zipInput = document.getElementById('zip')
const cvvInput = document.getElementById('cvv')
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameReg = /^[a-zA-Z ]{2,30}$/
const ccReg = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
const zipReg = /(^\d{5}$)|(^\d{5}-\d{4}$)/
const cvvReg = /^[0-9]{3,4}$/


document.getElementById('regButton').addEventListener('click', (e) =>{
    e.preventDefault()
    
    if(payWith.value == 'bitcoin'){
        window.location.href = 'https://www.blockchain.com/btc/address/1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
    }
     if (payWith.value == 'paypal') {
         window.location.href = 'https://www.paypal.com/paypalme/1ZKCJQ6JQ';
     }
    if(!nameInput.value.match(nameReg)){
        document.getElementById('labelName').classList.add("not-valid");
        document.getElementById('name-hint').classList.remove('hint')
    }
    
    if(!emailInput.value.match(emailReg)){
        document.getElementById('labelEmail').classList.add('not-valid')
        document.getElementById('email-hint').classList.remove('hint')
    }
    if(actBox.querySelectorAll("input:checked").length === 0){
        document.getElementById('activities').classList.add('not-valid')
        document.getElementById('activities-hint').classList.remove('hint')
    }
    if (!cardNumInput.value.match(ccReg)) {
        document.getElementById("cc-hint").classList.add("not-valid");
        document.getElementById('cc-hint').classList.remove('hint')
    }
    if(!zipInput.value.match(zipReg)){
        document.getElementById("zip-hint").classList.add("not-valid");
        document.getElementById('zip-hint').classList.remove('hint')
    }
    if(!cvvInput.value.match(cvvReg)){
        document.getElementById('cvv-hint').classList.add('not-valid')
        document.getElementById('cvv-hint').classList.remove('hint')
    }
})



