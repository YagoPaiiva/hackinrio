import Desc1MP3 from './desc_1.mp3'
import Desc2MP3 from './desc_2.mp3'
import LoginMP3 from './login.mp3'
import IntroMP3 from './intro.mp3'
import Proj1MP3 from './projeto1.mp3'
import Proj2MP3 from './projeto2.mp3'
import HelpMP3 from './help.mp3'

export { LoginMP3, Desc1MP3, Desc2MP3, IntroMP3, Proj1MP3, Proj2MP3 }
let loginAudio = new Audio(LoginMP3);
let tutorialAudio = new Audio(IntroMP3);
let helpAudio = new Audio(HelpMP3)

const Audios = {
  Signin: () =>{
    loginAudio.play()
    return loginAudio.duration
  },

  Tutorial: () => {
    tutorialAudio.play()
    return tutorialAudio.duration
  },

  Help: () => {
    helpAudio.play()
    return helpAudio.duration
  }
}

export default Audios