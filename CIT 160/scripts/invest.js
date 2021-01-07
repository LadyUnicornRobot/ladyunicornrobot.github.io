/* principal id = "principal"
* annual rate id = "interest"
* number of years id = "numYears"
* periods per year id = "pPerYear"
*/

function doFV() {
    // get user input
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("interest").value);
    let years = parseFloat(document.getElementById("numYears").value);
    let periodsPerYear = parseFloat(document.getElementById("pPerYear").value);
    // call computeFutureValue() using variables set for user input
    let value = computeFutureValue(principal, annualRate, years, periodsPerYear);
    // display result to user on click, fix to 2 deicmals because: money
    document.getElementById("futureValue").innerHTML = value.toFixed(2);
}

function computeFutureValue(a, b, c, d) {
    // r = annual rate / periods per year to find rate per period
    let r = b / d;
    // n = years * periods per year to find total periods
    let n = c * d;
    // first write equation, then create variables
    let f = a * ((1 + r) ** n);
    return f;
}
