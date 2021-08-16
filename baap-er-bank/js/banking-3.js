// getInputValue function for getting input amount from deposit and withdraw
function getInputValue(inputId){
    var input = parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = "";
    console.log(input);
    return input;
}
// updateTotalAmount function for updating total
function updateTotalAmount(amountId, amount){
    const currentAmount = parseFloat(document.getElementById(amountId).innerText);
    document.getElementById(amountId).innerText = currentAmount + amount;
}
// getCurrentBalance function for getting current balance
function getCurrentBalance() {
    const previousBalanceTotal = parseFloat(document.getElementById("balance-total").innerText);
    return previousBalanceTotal;
}
// updateBalance function for updating balance-total
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}
// calling deposit functionality when deposit amount given
document.getElementById('deposit-button').addEventListener('click', function (){
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalAmount('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
      }
})
// calling withdraw functionality when withdraw amount given
document.getElementById('withdraw-button').addEventListener('click', function (){
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalAmount("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
      }
    if (withdrawAmount > currentBalance) {
    console.log(
        "You can not withdraw more than what you have in your account"
    );
    }
})