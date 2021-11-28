import {Sbox, SboxTutorial} from '../signin/styled'
import { Sbutton, Container} from "../../components/buttons/styled";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Audios from '../../audio/handler'

const Page = () => {
  let counter = 0

  const styleButton = {
    backgroundColor: '#ff0f64'
  }

  const callAudio = () => {
    Audios.Tutorial()
    setTimeout(() => {
      counter = 0
    }, (60*10*1000));
  }

  document.addEventListener('click', () => {
    if (counter === 0){
      callAudio()
      counter++
    }
  })
  

  return(
    <Container>
      <SboxTutorial>
        <h1>Tutorial de ambientação da loja</h1>
        <h2>Bom dia, você está na ENEL Niterói. Nesta unidade, as paredes tem cores gelo e em frente a este totem, você encontrará cabines com atendentes, para o caso de os serviços oferecidos aqui no Totem não serem suficientes. </h2>
        <Link to="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undo-alt']} size="lg" />Voltar</Sbutton></Link>
      </SboxTutorial>
  </Container>
  )
}
export default Page