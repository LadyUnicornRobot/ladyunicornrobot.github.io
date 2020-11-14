function addOddIntegers() {

    // variable 'n' for user input
    // get user input #userNumber

    let n = parseFloat(document.getElementById('userNumber').value);

    //make sure I have the right input and the right output
    //need variable 'sum' to hold the output
    let sum = 0;


    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }

    // output sum to user in #oddSum

    document.getElementById('oddSum').innerHTML = "The sum of the odd integers of " + n + " is " + sum + "."
}