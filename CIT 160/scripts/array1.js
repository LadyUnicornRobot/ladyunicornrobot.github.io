/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */
function test() {
    let list1 = [17, 8, 9, 5, 20];
    let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

    // Test the addEnds function by calling it two times.
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.
    let output =
        sum1 + '<br>' +
        sum2 + '<br>' +
        mid1 + '<br>' +
        mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function addEnds(list) {
    // find the last number of the list
    let i = list.length - 1;
    // add two values by calling the index and returning value
    let value = list[i] + list[0];
    // return value
    return value;
}

function getMiddle(list) {
    // determine if list is even or odd
    if (list.length % 2 !== 0) {
        // find mid-point
        let value = list[list.length >>> 1];
        return value;

    } else {
        // find the list.length - 1 and then >>> 1 to the index number and return the value of that place in the array
        //let value = ((list[list.length >>> 1]) + (list[list.length >>> 1] - 1) / 2);
        let i = (list.length >>> 1);
        let value = ((list[i] + list[i - 1]) / 2);
        return value;

        // halfway point on an odd number is the halfway of a number below. so half of 19 is 9. Half of 18 is also 9. so I need to always add in the half. and if it is an even number of indexes, i need to add in the half index plus one up, then divide by two? right?
    }
}