import { SboxSignin, Sbutton, SContainer, FormArea } from './styled'
import { useEffect, useState } from 'react'
import Audios from '../../audio/handler';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let counter = 0;

const Page = () => {

  const [cpf, setCpf] = useState('')
  const [consumerUnit, setConsumerUnit] = useState('')


  const validationLogin = () => {
    if ( cpf === "123456" && consumerUnit === "abc123"){
      window.location.href = "/"
    }
  }
  const validationLoginFingerprint = () => {
      window.location.href = "/"
  }

 

  const callAudio = () => {
    setTimeout(() => {
      Audios.Signin()
    }, 1000);
    setTimeout(() => {
      counter = 0
    }, (60*10*1000));
  }

  document.addEventListener('click', () => {
    callAudio()
  })

  document.dispatchEvent(new Event('click'))



  return (
    <SContainer>
     
      <SboxSignin>
      <form onSubmit={Event=>{
        Event.preventDefault()
        console.log('foi')
      }}>
          <h1>Login</h1>
        <FormArea>
          <div className="ajustInput">
            <label  for="cpfArea">CPF: <br/>
              <input
              alt="Digite o seu CPF"
              onFocus={true}
              name="cpfArea" 
              type="number"
              placeholder="Use o CPF fictício: 123456"
              value={cpf}
              onChange={state=>setCpf(state.target.value)}
              required
              ></input>
            </label>

            <label for="ucArea">Unidade Consumidora: <br/>
              <input 
              type="text"
              placeholder="Use a Unidade Consumidora fictícia: abc123"
              name="ucArea"
              value={consumerUnit}
              onChange={state=>setConsumerUnit(state.target.value)}
              required
              ></input>
            </label>
            <label>
              
              <Sbutton type="submit"
              onClick={(Events) => {
                Events.preventDefault()
                validationLogin()
                }}>
                Prosseguir
              </Sbutton>
              <button onClick={(Events) => {
                Events.preventDefault()
                validationLoginFingerprint()
                }} class="fingerPrint"><FontAwesomeIcon className="FontAwesome" icon={['fas', 'fingerprint']} size="lg" /></button>
          </label>
          </div>
        </FormArea>

      </form>
      </SboxSignin>
    </SContainer>
  )
              }
export default Page