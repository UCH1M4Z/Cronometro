let time
let isRunning = false
let seconds =0
let minutes =0

const timeDisplay =document.getElementById('time')
const startStopButton =document.getElementById('starStop')
const resetButton =document.getElementById('reset')
const pauseButton =document.getElementById('pause')


function actualizartime(){
    let displayMinutos= minutos <10 ?'0'+minutes:minutes
    let displaySeconds= seconds <10 ?'0'+seconds:seconds
    timeDisplay.textContent =`${displayMinutes}:${displaySeconds}`;
}