/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
    let list1 = [17, 8, 9, 5, 20];
    let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

    // Test the countEvens function by calling it two times.
    let count1 = countEvens(list1);
    let count2 = countEvens(list2);

    // Test the multiply function by calling it two times.
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 4);

    // Build a string to display to the user.
    let output =
        count1 + '<br>' +
        count2 + '<br>' +
        mult1 + '<br>' +
        mult2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function countEvens(list) {
    // for each array element of list, check for % 2 == 0
    // return number of elements that are even
    // var 'count' for holding counter, i++
    // list.forEach(evenCount)
    let i;
    let count = 0;
    for (i = 0, i < list.length, i++) {
        if (list[i] % 2 == 0) {
            count++;
        }
        return count;
    }

}


function multiply(list, multiplier) {
    // returns a new array of original elements all multiplied by the argument sent
    // for each element in list, multiply by multiplier
    let i;
    let list2;
    for (i = 0, i < list.length, i++) {
        let product = list[i] * multiplier;
        list2.push(product);
        return list2;
    }


    // make or repopulate an array, return an array
}

// push and pop
// new array as var, array.push to add, return new array