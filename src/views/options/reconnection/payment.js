import { useEffect, useState } from "react";
import { Sbutton, Container} from "../../../components/buttons/styled";
import { Link } from 'react-router-dom'
import { SboxPayment, SboxYesOrNo, SboxCantContinue} from '../../signin/styled'
import { SboxReconection } from "../../signin/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Help from '../Help'
import Loading from './loading'
import Audios from '../../../audio/handler'

let counter = 0;
let ref = {
  opcao: 0,
  keyPress: false
}


const styleButton = {
  backgroundColor: '#ff0f64'
} 

const Page = () => { 

  const [ FunctionMenu, setFunctionMenu ] = useState('loading')
  const [ checkPayment, setCheckPayment ] = useState(false)
  
  const Renderes = {

    Menu: () =>{

      
      const callAudio = () => {
        Audios.ligacao(ref)
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

      return <>

        <SboxReconection>
          <h1>Verificamos que constam débitos em aberto.</h1>
          <h2>Você já realizou o pagamento da sua fatura?</h2>

            <form className="contentButton" >
              <Sbutton style={styleButton} onClick={
                (Events)=>{events.checkPayment("3days", Events)}}>
                Paguei a mais de 3 dias
              </Sbutton>
      
                <Sbutton style={styleButton} onClick={
                  (Events)=>{events.checkPayment("today", Events)}}>
                  Paguei hoje
                </Sbutton>
      
                <Sbutton style={styleButton} onClick={
                  (Events)=>{events.checkPayment("notPayment", Events)}}>
                  Ainda não paguei
                </Sbutton>

                <Link to="/"><Sbutton style={styleButton}>Voltar</Sbutton></Link>
              
            </form>
          </SboxReconection>
        </>
    },
  
    identifyPayment: () => {
    return(
      <Container>
        <SboxPayment>
        <h1>Identificamos o seu pagamento em nosso banco de dados!</h1>
        <h2>Em algumas horas, nossos técnicos irão religá-la.</h2>
        <Link to="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undoalt']} size="lg" />Voltar</Sbutton></Link>
        </SboxPayment>
      </Container>
      )
    },

    noIdentifytPayment: () =>{

    return(
        <Container>
        <SboxYesOrNo>
          <h1>Não identificamos o pagamento de forma automática.</h1>
          <h2>Você tem o comprovante de pagamento?</h2>
          <div className="contentButton">
          <Sbutton style={styleButton} onClick={
                (Events)=>{events.checkPayment("Yes", Events)}}>
               Sim
              </Sbutton>

              <Sbutton style={styleButton} onClick={
                (Events)=>{events.checkPayment("No", Events)}}>
                Não
              </Sbutton>
          </div>
        </SboxYesOrNo>
      </Container>)
    },

    notComprovant: () => {
      return(
        <Container>
          <SboxCantContinue>
            <h1>Infelizmente não conseguiremos dar prosseguimento com a sua solicitação!</h1>
            <h2>Será necessário a apresentação do comprovante de pagamento.</h2>
            <Link to="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undoalt']} size="lg" />Voltar</Sbutton></Link>
          </SboxCantContinue>
        </Container>
      )
    },

    Comprovant: () => {
      return(
        <Help />
      )
    },

    notPaymentPage: () => {
      return(
        <Container>
            <SboxCantContinue>
              <h1>Infelizmente não conseguiremos dar prosseguimento com a sua solicitação!</h1>
              <h2>Será necessário realizar o pagamento para prosseguir com a religação.</h2>
              <a href="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undoalt']} size="lg" />Voltar</Sbutton></a>
            </SboxCantContinue>
          </Container>
      )
    }
  }

  useEffect(()=>{
    const loading = () =>{
      setTimeout(() => {
       setFunctionMenu('')
      }, 1500);
    }
    loading()
  },[])
  
  const events = {
    checkPayment: (value, Events) => {
      Events.preventDefault()
      setFunctionMenu(value)
      setCheckPayment(false)
    }
  }

    return(
      <Container>
        { 
          FunctionMenu === "loading" 
          ? <Loading />
          : FunctionMenu === "3days"
          ? Renderes.noIdentifytPayment()
          : FunctionMenu === "today"
          ? Renderes.identifyPayment()
          : FunctionMenu === "notPayment"
          ? Renderes.notPaymentPage()
          : FunctionMenu === "Yes"
          ? Renderes.Comprovant()
          : FunctionMenu === "No"
          ? Renderes.notComprovant()
          : Renderes.Menu()
        }
      
      </Container>
    )
  }



export default Page


