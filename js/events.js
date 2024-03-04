import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundON,
  buttonStop
} from "./elements.js"

export default function ({ controls, timer, sound, }
) {
  buttonPlay.addEventListener('click', function () {
    sound.pressButton()
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    sound.pressButton()
    controls.pause()
    timer.hold()
  })


  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })



  buttonSoundOff.addEventListener('click', function () {
    buttonSoundON.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })

  buttonSoundON.addEventListener('click', function () {
    buttonSoundON.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })


}
