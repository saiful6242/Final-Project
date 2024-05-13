        // Function to display today's date and time
        function displayDateTime() {
            var now = new Date();
            var dateTimeString = "Date: " + now.toDateString() + "<br>Time: " + now.toLocaleTimeString();
            document.getElementById("datetime").innerHTML = dateTimeString;
        }

        // Call the function to display date and time
        displayDateTime();
