//Checkings account buttons and inputs
let checkingsDeposit = document.querySelector("button.chekingsDeposit");
let cd = document.querySelector('input.cd');
let savingsWithdrawal = document.querySelector("button.checkingsWithdrawal");
let cw = document.querySelector('input.cw');

//Savings account buttons and inputs
let savingsDeposit = document.querySelector("button.savingsDeposit");
let sd = document.querySelector('input.sd');
let savingsWithdrawal = document.querySelector("button.savingsWithdrawal");
let sw = document.querySelector('input.sw');

//Hide and display input
checkingsDeposit.addEventListener('click', () => {
    if(cd.style.display == 'none'){
        checkingsDeposit.textContent = 'Deposit';
        cd.style.display = 'block'; // will display the input
    } else {
        checkingsDeposit.textContent = 'Cancel';
        cd.style.display = 'none'; //will hide the input
    }
})