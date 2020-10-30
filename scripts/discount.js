function grandTotal() {

    // get input from user, parse to make number; get today's day; add variables for computing

    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let dayOfWeek = new Date().getDay();
    let discountTotal;
    let taxAdd;

    // check value against 50, check today against Tues or wed, take a discount if meets criteria

    if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        discountTotal = subtotal - subtotal * .10;
        // add tax to subtotal and discountTotal
        taxAdd = discountTotal + discountTotal * .06;
    } else { taxAdd = subtotal + subtotal * .06;
    }

    // output grand total to user
    
    document.getElementById("grandTotal").innerHTML = "You owe $" + taxAdd.toFixed(2)
}