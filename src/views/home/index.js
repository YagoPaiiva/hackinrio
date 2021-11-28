import { Sbutton, Container} from "../../components/buttons/styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Page = () =>{

  return(
    <Container>
      <Link to ="/tutorial"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'map-marker-alt']} size="lg" />TUTORIAL DE AMBIENTAÇÃO NA LOJA</Sbutton></Link>
      <Link to ="/three"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'lightbulb']} size="lg" />LIGAÇÃO DA ENERGIA</Sbutton></Link>
      <Link to ="/payment"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'lightbulb']} size="lg" />RELIGAÇÃO DA ENERGIA</Sbutton></Link>
      <Link to ="/billet"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'file-invoice']} size="lg" />SEGUNDA VIA DO BOLETO</Sbutton></Link>
      <Link to ="/help"><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'info-circle']} size="lg" />SOLICITAR AJUDA</Sbutton></Link>
      <Link to =""><Sbutton><FontAwesomeIcon className="FontAwesome" icon={['fas', 'times-circle']} size="lg" />SAIR</Sbutton></Link>
    </Container>
  )
}
export default Page