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

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  TimeOut = setTimeout(function () {
    let seconds = Number(secondDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)


    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))


    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()

})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(TimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
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
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
}) 