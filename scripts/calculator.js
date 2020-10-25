function checkMath(){ //collect all inputs from user, two numbers, an answer, and operator
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answer = parseFloat(document.getElementById("answer").value);

    // create variables for doing internal calculations
    let total;
    let message;
    // check for operator match
    if (operator == "+") {
        // do internal calculation
        total = number1 + number2;
        // check calculation with input answer and determine message
    } if (total == answer) {
        message = "Correct! 🏆";
    } else {
        message = "Incorrect 😢";
    }
    // copy and paste three more times for three other operators, change operators in each if else set
    if (operator == "-") {
        total = number1 - number2;
    } if (total == answer) {
        message = "Correct! 🏆";
    } else {
        message = "Incorrect 😢";
    }
    if (operator == "*") {
        total = number1 * number2;
    } if (total == answer) {
        message = "Correct! 🏆";
    } else {
        message = "Incorrect 😢";
    }
    if (operator == "/") {
        total = number1 / number2;
    } if (total == answer) {
        message = "Correct! 🏆";
    } else {
        message = "Incorrect 😢";
    }
    // output message to user
    document.getElementById("output").innerHTML = message;
}