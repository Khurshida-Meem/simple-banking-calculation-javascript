// deposit and update total balence
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;

    // update deposit total
    const depositTotal = document.getElementById('total-deposit');

    const previousDeposit = depositTotal.innerText;
    const newDepositTotal = parseFloat(newDepositAmount) + parseFloat(previousDeposit);
    depositTotal.innerText = newDepositTotal;
    // clear input value
    depositInput.value = '';

    // update balence
    const currentBalance = document.getElementById('current-balence');
    const newCurrentValue = currentBalance.innerText;
    const currentFloatBalance = parseFloat(newCurrentValue);
    const afterDepoBalance = currentFloatBalance + parseFloat(newDepositAmount);
    currentBalance.innerText = afterDepoBalance;
});

// withdrow and update total balence
document.getElementById('withdrow-button').addEventListener('click', function () {
    // get element from input
    const withDrowInput = document.getElementById('withdrow-amount');
    const newWithdrowAmount = withDrowInput.value;
    // get element from total withdrow 
    const currentWithdrow = document.getElementById('total-widhdrow');
    const previousWithdrow = currentWithdrow.innerText
    // add new inout an previous input
    const totalWithdrow = parseFloat(newWithdrowAmount) + parseFloat(previousWithdrow);
    currentWithdrow.innerText = totalWithdrow;
    withDrowInput.value = '';  //empty inout field after taking input

    // update balence
    const currentBalance = document.getElementById('current-balence');
    const newCurrentValue = currentBalance.innerText;
    const currentFloatBalance = parseFloat(newCurrentValue);
    const afterwithdrowBalance = currentFloatBalance - parseFloat(newWithdrowAmount);
    if(afterwithdrowBalance>=0)
    {
        currentBalance.innerText = afterwithdrowBalance;
    }
    else{
        withDrowInput.value = "you don't have sufficient money";
    }
});