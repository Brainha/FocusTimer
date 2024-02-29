// default import
import resetControls from "./controls.js"
// named import
import { Timer } from "./timer.js"


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut


const timer = Timer({
  minutesDisplay,
  secondDisplay,
  timerTimeOut,
  resetControls,
})


buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countdown()

})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(TimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundON.classList.remove('hide')
  buttonSoundOff.classList.add('hide')

})

buttonSoundON.addEventListener('click', function () {
  buttonSoundON.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    timer.resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
}) 