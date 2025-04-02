let time = null;
let isRunning = false;
let seconds =0;
let minutes =0;

const timeDisplay =document.getElementsByClassName('time')
const startStopButton =document.getElementById('starStop')
const resetButton =document.getElementById('reset')
const pauseButton =document.getElementById('pause')

window.onload = function(){
    var interval = window.setInterval(function(){
        incrementarTiempo()
    }, 1000)
}

function actualizartime(){
    let displayMinutes= minutes <10 ?'0'+minutes:minutes
    let displaySeconds= seconds <10 ?'0'+seconds:seconds
    document.getElementsByClassName('time').textContent =`${displayMinutes}:${displaySeconds}`;
    
    console.log(document.getElementsByClassName('time').textContent)
}


function incrementarTiempo() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    actualizartime();
  }


function startStop() {
    if (!isRunning) {
      isRunning = true;
      time = setInterval(incrementarTiempo, 1000);
    } else {
      isRunning = false;
      clearInterval(time);
    }
  }