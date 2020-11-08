function addOddIntegers() {

    // variable 'n' for user input
    // get user input #userNumber

    let n = parseFloat(document.getElementById('userNumber').value);



    for (i = 1; i <= n; i += 2) {
        
    }
// can't figure out how to get it to add up the integers.


    // output sum to user in #oddSum

    document.getElementById('oddSum').innerHTML = "The sum of the odd integers of " + userNumber + "is " + i + "."
}
/* notes:
    /* while (i <= n) {
        if (i % 2 !== 0) { //check for oddness
            i += n; // change value of i
        }
    /* find odd integers by n % 2
    * between 1 and n, including n
    * add odd integers together
    */

    // what do I need to repeat? I need to check if the number is odd and if it is then add it to the total, or in other words change n. Figure out the numbers less than or equal to n.
    }