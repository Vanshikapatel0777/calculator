let displayValue = '0';

function input(value) {
    if(displayValue=== '0' && value !=='.') {
        displayValue=value;

    } else{
        displayValue += value;
    }
updateDisplay();
    }
function clearDisplay() {
    displayValue= '0';
    updateDisplay();
}
function deleteLast() {
    if(displayValue.length > 1) {
        displayValue=displayValue.slice(0,-1);
    }
        else {
            displayValue= '0';
        }
        updateDisplay();
    }
function calculate() {
    try{
        displayValue=eval(displayValue).toString();
    } catch(error)
{
        display.value='Error';
    }
    updateDisplay();
}
function updateDisplay(){
    document.getElementById('display').innerText=displayValue;
}

