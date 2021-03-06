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
    Audios.Help()
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
        <h1>Estamos solicitando um atendente!</h1>
        <h2>Em alguns instantes, você será atendido.</h2>
        <Link to="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undo-alt']} size="lg" />Voltar</Sbutton></Link>
      </SboxTutorial>
  </Container>
  )
}
export default Page