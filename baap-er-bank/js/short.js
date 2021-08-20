/*
function myBank(inputId, updateAmount){
    let input = parseFloat(document.getElementById(inputId).value);
    if(input>0){
        document.getElementById(inputId).value = "";
        let currentAmount = parseFloat(document.getElementById(updateAmount).innerText) + input ;
        document.getElementById(updateAmount).innerText = currentAmount;
        let mainBalance = parseFloat(document.getElementById("balance-total").innerText);
        if(inputId=='deposit-input'){
            document.getElementById("balance-total").innerText = mainBalance  + input;
        }
        else{
            document.getElementById("balance-total").innerText = mainBalance  - input;
        }
    } 
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const deposit = myBank('deposit-input', 'deposit-total');
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdraw = myBank('withdraw-input', 'withdraw-total');
})
*/
