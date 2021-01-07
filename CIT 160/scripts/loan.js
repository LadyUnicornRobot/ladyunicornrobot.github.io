/* ids:
* principal
* annualRate
* numYears
* paymentsPerYear
* paymentOutput
* paidToDate
* payoffOutput
*/


// global scope variables to get user input didn't work. How do I get all of these from user input, one time, for all the functions that are using them?


function doPayment() {
    // call computePayment, using same argument & parameter values to keep things clear
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseFloat(document.getElementById("numYears").value);
    let periodsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
    let payment = computePayment(principal, annualRate, years, periodsPerYear);

    document.getElementById("paymentOutput").innerHTML = payment.toFixed(2);

}

function doBalance() {
    // call computeBalance, using same argument & parameter values to keep things clear
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseFloat(document.getElementById("numYears").value);
    let periodsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
    let numberOfPaymentsPaidToDate = parseFloat(document.getElementById("paidToDate").value);
    let balance = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);

    document.getElementById("payoffOutput").innerHTML = balance.toFixed(2);
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    let r = annualRate / periodsPerYear;
    let n = periodsPerYear * years;
    let p = (principal * r) / (1 - ((1 + r) ** (- n)));
    return p;
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
    let r = annualRate / periodsPerYear;
    let p = computePayment(principal, annualRate, years, periodsPerYear);
    let b = (principal * ((1 + r) ** numberOfPaymentsPaidToDate)) - (p * (((1 + r) ** numberOfPaymentsPaidToDate) - 1)) / r;
    return b;
}