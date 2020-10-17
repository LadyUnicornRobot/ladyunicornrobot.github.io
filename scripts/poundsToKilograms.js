//name function
function convertPounds(){

    //name variable, get input, parseFloat processing
    let pounds = parseFloat(document.getElementById("pounds").value);  

    //processing, convert to kg
    let output = pounds * 0.45359237;
   
    //output, processing to one decimal
    document.getElementById("kilograms").innerHTML = output.toFixed(1) + " kilograms.";



}