const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate() {
    const display = document.getElementById("display");
    
    try {
        let expression = display.value;


        if (/\/0(?![.0-9])/.test(expression)) {
            throw new Error("ZeroDivision");
        }

     
        let result = eval(expression);
        
        
        if (!isFinite(result)) {
            throw new Error("ZeroDivision");
        }

        display.value = result;

    } catch (error) {

        if (error.message === "ZeroDivision") {
            display.value = "Can't divide by 0"; 
        } else {
            display.value = "Error"; 
        }
    }
}

function clearDisplay(){
    display.value = "";
}