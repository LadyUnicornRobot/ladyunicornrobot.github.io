function fiveTimes() {

    // set 5 as a constant; set product and output as a variables; make sure output is defined in empty quotes so it doesn't read as 'undefined' the first time through the loop

    const i = 5;
    let product;
    let output = "";

    // run loop, variable multiple increases one each time; multiply 5 by each number from 1-12, result of which is product

    for (let multiple = 1; multiple <= 12; multiple++) {
        // output will be i * n = product; have to output to innerHTML on every loop with line break between; output += so that it doesn't delete previous outputs
        product = i * multiple;
        output += i + " * " + multiple + " = " + product + "<br>";
        document.getElementById("output").innerHTML = output;
    }
}

