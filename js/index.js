import Controls from "./controls.js"
import Timer from "./timer.js"

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const fiveMoreMinutesBtn = document.querySelector(".fiveMoreMinutesBtn")
const minusFiveMinutesBtn = document.querySelector(".minusFiveMinutesBtn")


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

minusFiveMinutesBtn.addEventListener('click', () => {
    timer.minusFiveMinutes()
})

btnPlay.addEventListener('click', () => {
    controls.play()
    timer.cowntDown()
})

// controls.startPauseKey()

btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
})

btnStop.addEventListener('click', () => {
   controls.reset()
   timer.reset()
})

btnSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if(!newMinutes){
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

fiveMoreMinutesBtn.addEventListener('click', () => {
    timer.moreFiveMinutes()
})

// document.onkeydown = function (event){
//     if(event.key === 'Escape'){
//         controls.reset()
//         timer.reset()
//         setTime()
//     }
// }