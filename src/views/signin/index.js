import { SboxSignin, Sbutton, SContainer, FormArea } from './styled'
import { useState } from 'react'
import Audios from '../../audio/handler';
import { Link } from "react-router-dom";
let counter = 0;

const Page = () => {

  const [cpf, setCpf] = useState('')
  const [consumerUnit, setConsumerUnit] = useState('')

  const callAudio = () => {
    Audios.Signin()
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
              name="cpfArea" 
              type="number"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={state=>setCpf(state.target.value)}
              required
              ></input>
            </label>

            <label for="ucArea">Unidade Consumidora: <br/>
              <input 
              type="text"
              placeholder="Digite sua Unidade Consumidora"
              name="ucArea"
              value={consumerUnit}
              onChange={state=>setConsumerUnit(state.target.value)}
              required
              ></input>
            </label>
            <label>
              
            <Link to ="/">
              <Sbutton type="submit"
              onClick={(Events) => {
                // Events.preventDefault()
                console.log('Fazendo login...')
                }}>
                Prosseguir
              </Sbutton>
            </Link>
          </label>
          </div>
        </FormArea>

      </form>
      </SboxSignin>
    </SContainer>
  )

}

export default Page