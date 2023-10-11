/*
1. add event listener to the deposit button
2.get deposit amount from the deposit input filed
2-5. Convert string deposit amount to a number type

3.clear the deposit input field after getting the value

4. get the previus deposit total

5. calculate new deposit total and ste the value to the deposit total

6. get current balance total

7.calculate the new balance and set it to the balance total element 

*/ 

// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositFieldString);
    
    // step-3: 
    depositField.value = '';

    // step-4

    const depositTotalElement = document.getElementById('Deposti-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    //  step-5
    const newDepositTotal = previusDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previusBalanceTotalAmount = parseFloat(previusBalanceTotalString);
    
    // step-7
    const newBalanceTotal = previusBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})