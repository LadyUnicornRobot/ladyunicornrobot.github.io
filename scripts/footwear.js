function pickShoes() {
    let shoes;
    //input user selects weather input from combo box
    let weather = document.getElementById("weather").value;
    //processing with if else
    if (weather == "snow") {
        shoes = "boots";
    } else if (weather == "rain") {
        shoes = "galoshes";
    } else if (weather == "hot") {
        shoes = "sandals";
    } else if (weather == "unknown") {
        shoes = "shoes";
    } else {
        shoes = "bare feet";
    }


    //output type of shoes
    document.getElementById("shoesies").innerHTML = "Wear " + shoes + "."
}
