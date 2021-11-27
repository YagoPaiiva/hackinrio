import { Sbutton, Container} from "../../components/buttons/styled";
import { NavBar } from "../../components/menu/styled";
import { Link } from "react-router-dom";
import Logo from '../../components/img/enel-logo.png';

const Page = () =>{

  return(
    <>
    <Container>
    <NavBar>
      <div>
        <img src={Logo} />
        <h2>Bem vindo, Fulano da Silva</h2>
      </div>  
    </NavBar>
      <Link to ="/one"><Sbutton>SEGUNDA VIA DO BOLETO</Sbutton></Link>
      <Link to ="/two"><Sbutton>RELIGAÇÃO DA ENERGIA</Sbutton></Link>
      <Link to ="/three"><Sbutton>LIGAÇÃO DA ENERGIA</Sbutton></Link>
      <Link to ="/four"><Sbutton>TUTORIAL DE AMBIENTAÇÃO NA LOJA</Sbutton></Link>
      <Link to ="/five"><Sbutton>SOLICITAR AJUDA</Sbutton></Link>
      <Link to ="help"><Sbutton>SAIR</Sbutton></Link>
    </Container>
    </>
  )
}
export default Page