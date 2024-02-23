function updateDateTime() {
        var currentDate = new Date();
        var dateString = currentDate.toDateString();
        var timeString = currentDate.toLocaleTimeString();

 document.getElementById("datetime").innerHTML = "Date: " + dateString + "<br>Time: " + timeString;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
