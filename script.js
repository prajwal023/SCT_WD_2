let timer;
        let seconds = 0, minutes = 0, hours = 0;
        let isRunning = false;
        
        function updateTime() {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            if (minutes === 60) { minutes = 0; hours++; }
            document.getElementById('time').innerText = 
                (hours < 10 ? "0" : "") + hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;
        }
        
        document.getElementById('start').addEventListener('click', function() {
            if (!isRunning) {
                timer = setInterval(updateTime, 1000);
                isRunning = true;
            }
        });
        
        document.getElementById('pause').addEventListener('click', function() {
            clearInterval(timer);
            isRunning = false;
        });
        
        document.getElementById('reset').addEventListener('click', function() {
            clearInterval(timer);
            seconds = 0; minutes = 0; hours = 0;
            document.getElementById('time').innerText = "00:00:00";
            document.getElementById('laps').innerHTML = "";
            isRunning = false;
        });
        
        document.getElementById('lap').addEventListener('click', function() {
            if (isRunning) {
                let lapTime = document.getElementById('time').innerText;
                let lapItem = document.createElement('li');
                lapItem.innerText = lapTime;
                document.getElementById('laps').appendChild(lapItem);
            }
        });