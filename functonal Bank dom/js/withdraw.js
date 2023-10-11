// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    // step 3
    withdrawField.value = '';

    // step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);
    // step 5
    const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;  
    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString =balanceTotalElement.innerText;
    const previusBalanceTotalAmount = parseFloat(previusBalanceTotalString);
     
    // step 7

    const newBalanceTotal = previusBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal; 

})