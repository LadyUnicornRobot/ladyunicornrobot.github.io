function alarmClock() {

    // get input from computer, month, day, date; create undefined message

    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let message;

    // types of output: 1) get up, 2) sleep in; set up notification for days to sleep in

    if (dayOfWeek == 6 || dayOfWeek == 0 || (month == 0 && dayOfMonth == 1) || (month == 3 && dayOfMonth == 4) || (month == 11 && dayOfMonth == 25)) {
        message = "Sleep in.";

        // set up notification for all other days to get up

    } else {
        message = "Get up!";
    }

    // output message to user
    
    document.getElementById("message").innerHTML = message;

}
