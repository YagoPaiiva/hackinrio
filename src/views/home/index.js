import { Sbutton, Container} from "../../components/buttons/styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Audios from '../../audio/handler';

let counter = 0;
let ref = {
  opcao: 0,
  keyPress: false
}

const Page = () =>{

  document.addEventListener("keypress",(event)=>{
    if (event.key == 'n'){
      ref.opcao++
      Audios.Opcao(ref)
    }
    if (event.key == 's')
      switch(ref.opcao){
        case 1:
          window.location.href = "/tutorial"
          break;
        case 2:
          window.location.href = "/three"
          break;
        case 3:
          window.location.href = "/payment"
          break;
        case 4:
          window.location.href = "/billet"
          break;
        case 5:
          window.location.href = "/help"
          break;
        case 6:
          break;
      }
  })

  
  const callAudio = () => {
    Audios.Menu(ref)
    setTimeout(() => {
      counter = 0
    }, (60*10*1000));
  }
  
  document.addEventListener("click", () => {
    if (counter === 0){
      callAudio()
      counter++
    }
  })

  setTimeout(() => {
    document.dispatchEvent(new Event('click'))
  }, 1000)


  return(
    <Container>
      <a href="/tutorial"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'map-marker-alt']} size="lg" />TUTORIAL DE AMBIENTAÇÃO NA LOJA</Sbutton></a>
      <a href="/three"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'lightbulb']} size="lg" />LIGAÇÃO DA ENERGIA</Sbutton></a>
      <a href="/payment"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'lightbulb']} size="lg" />RELIGAÇÃO DA ENERGIA</Sbutton></a>
      <a href="/billet"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'file-invoice']} size="lg" />SEGUNDA VIA DO BOLETO</Sbutton></a>
      <a href="/help"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'info-circle']} size="lg" />SOLICITAR AJUDA</Sbutton></a>
      <a href=""><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'times-circle']} size="lg" />SAIR</Sbutton></a>
    </Container>
  )
}
export default Page