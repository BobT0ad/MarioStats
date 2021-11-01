document.addEventListener("DOMContentLoaded", function () {

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
                        modes.push(k);
                    }
                }

            

            // Vars for Average, Median, Mode, and Mode Occurence Number
            var avgString = ("Average: " + formatChange(avg));
            var modeString = ("Mode: " + modeResult);
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
