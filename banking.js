document.getElementById('desposit-button').addEventListener('click', function () {
    // add desposite amount
    const despositInput = document.getElementById('desposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const newDepositAmount = parseFloat(despositInput.value);
    const prevDepositAmount = parseFloat(depositTotal.innerText);

    const updatedDepositAmount = prevDepositAmount + newDepositAmount;

    depositTotal.innerText = updatedDepositAmount;


    // update account balance
    const balanceTotal = document.getElementById('current-balance-total');
    const newBalanceTotal = parseFloat(balanceTotal.innerText);
    const updateBalanceTotal = newBalanceTotal + newDepositAmount;

    balanceTotal.innerText = updateBalanceTotal;


    //clear the input field
    despositInput.value = '';

})




// update withdraw balance

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawInput = parseFloat(withdrawInput.value);
    const prevWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const totalWithDrawAnount = prevWithdrawTotal + newWithdrawInput;

    withdrawTotal.innerText = totalWithDrawAnount;



    // update total account balance

    const totalBalance = document.getElementById('current-balance-total');
    const prevTotalBalace = parseFloat(totalBalance.innerText);

    const updatedTotalBalance = prevTotalBalace - newWithdrawInput;
    totalBalance.innerText = updatedTotalBalance;

    withdrawInput.value = '';
})