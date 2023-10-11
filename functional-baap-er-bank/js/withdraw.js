/*
1.add the withdraw button event handler
2.get withdraw amount by using getInputValueById function
3.previus withdraw amonunt by using getTextElementValueById function 
4.calculate new withdraw total and ste the value
4-5.set new withdraw total by using setTextElementValueById function
5.get previous balance total by using getTextElementValueById function
6. calculate new balance total
7.set balance total using getTextElementValueById function


*/ 


document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalance);
    
     

})