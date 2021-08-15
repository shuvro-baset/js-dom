/*
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})
*/

// another way
// when click on deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // update deposit balance
    let depositAddedAmount = document.getElementById("deposit-input").value;
    depositAddedAmount = parseFloat(depositAddedAmount);
    if (depositAddedAmount <= 0) {
      document.getElementById("deposit-error").innerText =
        "please insert a valid amount";
    } else {
      const previousDepositTotal =
        document.getElementById("deposit-total").innerText;
      const newDepositTotal =
        parseFloat(previousDepositTotal) + depositAddedAmount;
      document.getElementById("deposit-total").innerText = newDepositTotal;
      document.getElementById("deposit-error").innerText = "";
    }
    document.getElementById("deposit-input").value = "";
    // update balance Amount
    let balanceCurrentAmount =
      document.getElementById("balance-total").innerText;
    let balanceTotal = parseFloat(balanceCurrentAmount) + depositAddedAmount;
    document.getElementById("balance-total").innerText = balanceTotal;
  });
// withdraw Amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    let withdrawInput = document.getElementById("withdraw-input").value;
    console.log("I am clicked", withdrawInput);
    let withdrawCurrentAmount = parseFloat(
      document.getElementById("withdraw-total").innerText
    );
    document.getElementById("withdraw-input").value = "";
    const newWithdrawTotal =
      parseFloat(withdrawCurrentAmount) + parseFloat(withdrawInput);
    document.getElementById("withdraw-total").innerText = newWithdrawTotal;
    // reduce balance
    let balanceCurrentAmount =
      document.getElementById("balance-total").innerText;
    let balanceTotal =
      parseFloat(balanceCurrentAmount) - parseFloat(withdrawInput);
    document.getElementById("balance-total").innerText = balanceTotal;
  });
