// Input
function addNumbers(){ 
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
// Processing
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    //add numbers together
    let sum = number1 + number2
// Output
    document.getElementById("output").innerHTML = "The sum is " + sum + "."
}