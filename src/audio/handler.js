import Desc1MP3 from './desc_1.mp3'
import Desc2MP3 from './desc_2.mp3'
import LoginMP3 from './login.mp3'
import IntroMP3 from './intro.mp3'
import Proj1MP3 from './projeto1.mp3'
import Proj2MP3 from './projeto2.mp3'
import HelpMP3 from './help.mp3'

import MenuMP3 from './menu.mp3'
import Menu1MP3 from './menu_tut.mp3'
import Menu2MP3 from './menu_lig.mp3'
import Menu3MP3 from './menu_relig.mp3'
import Menu4MP3 from './menu_segvia.mp3'
import Menu5MP3 from './menu_help.mp3'
import Menu6MP3 from './menu_sair.mp3'
import LigacaoMP3 from './ligacao.mp3'

import PaymentMP3 from './ligacao.mp3'


export { LoginMP3, Desc1MP3, Desc2MP3, IntroMP3, Proj1MP3, Proj2MP3 }
let loginAudio = new Audio(LoginMP3);
let tutorialAudio = new Audio(IntroMP3);
let helpAudio = new Audio(HelpMP3)

let ligacaoAudio = new Audio(LigacaoMP3)
let paymentAudio = new Audio(PaymentMP3)

let menuAudio = new Audio(MenuMP3)
let menu1Audio = new Audio(Menu1MP3)
let menu2Audio = new Audio(Menu2MP3)
let menu3Audio = new Audio(Menu3MP3)
let menu4Audio = new Audio(Menu4MP3)
let menu5Audio = new Audio(Menu5MP3)
let menu6Audio = new Audio(Menu6MP3)

const Audios = {
  Signin: () =>{
    loginAudio.play()
    setTimeout(() => {
      opcoesAudio.play() 
    }, loginAudio.duration*1000)
    return loginAudio.duration
  },

  Tutorial: () => {
    tutorialAudio.play()
    return tutorialAudio.duration
  },

  Help: () => {
    helpAudio.play()
    return helpAudio.duration
  },

  Payment: () =>{
    paymentAudio.play()
    return paymentAudio.duration
  },

  ligacao:() => {
    ligacaoAudio.play()
    return paymentAudio.duration
  },

  Opcao: (ref) => {
    switch(ref.opcao){
      case 2:
        menu2Audio.play();
        break;
      case 3:
        menu3Audio.play();
        break;
      case 4:
        menu4Audio.play();
        break;
      case 5:
        menu5Audio.play();
        break;
      case 6:
        menu6Audio.play();
        break;
    }
  },

  Menu: (ref) => {

    menuAudio.play()
    ref.opcao = 1
    setTimeout(() => {
      menu1Audio.play() 
    }, menuAudio.duration*1000)
      
  }

}

export default Audios