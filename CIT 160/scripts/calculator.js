function checkMath() { //collect all inputs from user, two numbers, an answer, and operator
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answer = parseFloat(document.getElementById("answer").value);

    // create variables for doing internal calculations
    let total;

    // processing, do switch based on operator
    switch (operator) {
        case "+":
            total = number1 + number2
            break;
        case "-":
            total = number1 - number1
            break;
        case "*":
            total = number1 * number2
            break;
        case "/":
            total = number1 / number2
    }
    // check answer with user's input
    if (answer === total) {
        alert = "Correct! 🏆"
    } else {
        alert = "Incorrect 😢"
    }
    // alert to html
    document.getElementById("output").innerHTML = alert;
}