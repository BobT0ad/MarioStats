document.addEventListener("DOMContentLoaded", function () {

    simplyPepeLaugh();

    var sum = 0;
    fetch('https://www.speedrun.com/api/v1/leaderboards/o1y9wo6q/category/wkpoo02r')
        .then(response => response.json())
        .then(result => {

            var runs = result.data.runs;

            //Average of Times
            for (var i = 0; i < runs.length; i++) {
                console.log(runs[i].run.times.primary_t);

                sum += runs[i].run.times.primary_t;
            }
            // Final Average of Times
            var avg = sum / runs.length;


            // Mode of Times
                var frequency = {};
                var maxFreq = 0;
                var modes = [];

                for (var i = 0; i < runs.length; i++) {
                    frequency[runs[i].run.times.primary_t] = (frequency[runs[i].run.times.primary_t] || 0) + 1;

                    if (frequency[runs[i].run.times.primary_t] > maxFreq) {
                        maxFreq = frequency[runs[i].run.times.primary_t];
                    }
                }

                for (var p = 0; i < frequency; i++) {
                    if (frequency[p] == maxFreq) {
                        modes.push(p);
                    }
                }

            //43 edit

            // Vars for Average, Median, Mode, and Mode Occurence Number
            var avgString = ("Average: " + formatChange(avg));
            var modeString = ("Mode: ");
            var sumString = ("Sum: " + sum);
            var freqString = ("Frequency: " + maxFreq);


            var div1 = document.getElementById('avg');
            div1.innerHTML += avgString;

            var div2 = document.getElementById('mode');
            div2.innerHTML += modeString;

            var div3 = document.getElementById('sum');
            div3.innerHTML += sumString;

            var div4 = document.getElementById('freq');
            div4.innerHTML += freqString;
        })

})

// Avg Seconds to HH:MM:SS
function formatChange(avg) {
    var date = new Date(null)
    date.setSeconds(avg);
    var avgResult = date.toISOString().substr(12, 7);
    return avgResult;
}

function simplyPepeLaugh() {
    // This function was made by kirby233
    // Display the countdown timer in an element

    // Set the date we're counting up from
    var countDownDate = new Date("May 29, 2020 8:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = now - countDownDate;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="wrTimer"
        document.getElementById("wrTimer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s " + "since Simply's last WR!";

    }, 100);
}
