function myBank(inputId, updateAmount){
    let input = parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = "";
    // let currentAmount = getElementById(updateAmount).innerText;
    console.log(getElementById(updateAmount).innerText);
}


document.getElementById('deposit-button').addEventListener('click', function(){
    const deposit = myBank('deposit-input', 'deposit-total');
})