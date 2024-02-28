const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondDisplay = document.querySelector('.seconds')

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
    }


    secondDisplay.textContent = seconds - 1

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

})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
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
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})