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