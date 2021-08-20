function increaseDecrease(productType, isIncrease){
    var currentInputValue = parseInt(document.getElementById(productType + '-count').value);
    if(isIncrease){
        currentInputValue = currentInputValue +1;
        document.getElementById(productType + '-count').value = currentInputValue;
        if(productType=='phone'){
            var productTotal = 1219 * currentInputValue;
            document.getElementById('phone-total').innerText = '$' + productTotal;
        }
        else{
            var productTotal = 59 * currentInputValue;
            document.getElementById('case-total').innerText = '$' + productTotal;
        }
    }
    if(isIncrease == false && currentInputValue > 0){
        currentInputValue = currentInputValue -1;
        document.getElementById(productType + '-count').value = currentInputValue;
        if(productType=='phone'){
            var productTotal = 1219 * currentInputValue;
            document.getElementById('phone-total').innerText = '$' + productTotal;
        }
        else{
            var productTotal = 59 * currentInputValue;
            document.getElementById('case-total').innerText = '$' + productTotal;

        }
    }
}