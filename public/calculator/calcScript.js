const display = document.getElementById("display");
const historyDisplay = document.getElementById("history-display"); // Tarixçə üçün

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    
    if (["+", "-", "*", "/", "."].includes(input) && ["+", "-", "*", "/", "."].includes(lastChar)) {
        return;
    }

    if (input === ".") {
        const parts = display.value.split(/[\+\-\*\/]/);
        if (parts[parts.length - 1].includes(".")) return;
    }

    display.value += input;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    if (["+", "-", "*", "/", "."].includes(key)) appendToDisplay(key);
    if (key === "Enter") calculate();
    if (key === "Backspace") backspace();
    if (key === "Escape") clearDisplay();
});

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        if (!expression) return; 

        if (/\/0(?![.0-9])/.test(expression)) {
            throw new Error("ZeroDivision");
        }

        let result = eval(expression);
        
        if (!isFinite(result)) {
            throw new Error("ZeroDivision");
        }

        if (historyDisplay) historyDisplay.innerText = expression + " =";

        
        display.value = Number.isInteger(result) ? result : result.toFixed(4).replace(/\.?0+$/, "");
        
        

    } catch (error) {
        if (error.message === "ZeroDivision") {
            display.value = "Can't divide by 0"; 
        } else {
            display.value = "Error"; 
        }
    }
}

function clearDisplay() {
    display.value = "";
    if (historyDisplay) historyDisplay.innerText = "";
}