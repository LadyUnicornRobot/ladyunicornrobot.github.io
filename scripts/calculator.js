function checkMath(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answer = parseFloat(document.getElementById("answer").value);


    let total;
    let message;

    if (operator == "+") {
        total = number1 + number2;
    } if (total == answer) {
        message = "Correct! 🏆";
    } else {
        message = "Incorrect 😢";
    }
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
    document.getElementById("output").innerHTML = message;
}