function doInputOutput() {
/* called from onClick
* get temperature and store in var temperature
* get wind speed and store in var windspeed
* call second function windchill() if both inputs meet specifications
* store value returned by windchill() in a var windchill
* output value returned by windchill() to div for user to see
*/
let temperature = parseFloat(document.getElementById("temperature").value);
let windspeed = parseFloat(document.getElementById("windspeed").value);

if (temperature > 50 || windspeed < 3) {
    document.getElementById("output").innerHTML = "Not able to compute windchill. Temperature too high or windspeed too low.";
}   else {
    let windchill = windChill(temperature, windspeed);
document.getElementById("output").innerHTML = "Windchill is " + windchill.toFixed(2) + "&deg;F. 🥶";
}


}

function windChill(t, s) {
/* take a temperature in F as parameter
* take wind speed in mph as parameter
* calculate wind chill factor as temp F
* return wind chill factor in F
* NO input NO output, only calculate and return result
*/

let f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t) * (s ** 0.16);
return f;
}
