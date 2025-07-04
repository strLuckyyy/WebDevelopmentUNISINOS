
function multiply(a, b) {
    return a * b;
}

function setMessage(value) {
    const pSection = document.getElementById("message");
    pSection.innerHTML = ""; // Clear previous messages

    pSection.innerHTML += `<p id="message">Enter a number to calculate its multiplication table</p>
    <p id="message">${value}</p>`;
}

// clean both the result and the message tags
function cleanResultArea() {
    const resultArea = document.getElementById("result-area");
    resultArea.innerHTML = "";
}

// default message when the page loads or when the input is invalid
function defaultMessage() {
    const defaultMessage = "<p>Enter a number to calculate its multiplication table</p>";
    const resultArea = document.getElementById("result-area");
    const result = document.getElementbyId("result");

    resultArea.innerHTML = defaultMessage;

    if (result) {
        resultArea.removeChild(result);
    }
}

function getValues() {
    const numberValue = parseFloat(document.getElementById("numberInput").value);
    const multiplyValue = parseFloat(document.getElementById("multiplyInput").value);
    const number = isNaN(numberValue) ? 2 : numberValue;

    if (isNaN(multiplyValue)) {
        console.log("Invalid multiply input, setting default value to 10");
        return {
            number: null,
            multiply: null
        };
    }

    console.log("Values retrieved: ", number, multiplyValue)
    return {
        number: number,
        multiply: multiplyValue
    };
}

function calculate(v = 0) {
    const values = getValues();

    if (values.multiply === null) {
        alert("Invalid input values. Please enter valid numbers.");
        return;
    }

    v = Math.min(v, values.multiply);
    const result = multiply(values.number, v);
    console.log(values.number, " x ", v, " = ", result);
   
    const resultArea = document.getElementById("result-area");
    const newResult = document.createElement("div");
    newResult.id = "result";

    newResult.innerHTML = `${values.number} x ${v} = ${result}`;

    resultArea.appendChild(newResult);

    v++;

    if (v > values.multiply) {
        return;
    }
    
    calculate(v);
}

// event when button is clicked
document.getElementById("calculate-button").addEventListener("click", () => {
    console.clear();
    console.log("Calculating...");

    const values = getValues();
    if (values.number === null || values.multiply === null) {
        setMessage("Invalid input values. Please enter valid numbers.");
        defaultMessage();
        return;
    }
    
    const h2 = document.getElementById("display-number");
    h2.innerHTML = ""; // Clear previous h2 content
    h2.innerHTML = `${values.number}`;

    cleanResultArea();
    const result = calculate();

});
