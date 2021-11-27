import {Sparent, Sbox, Sinput, Sbutton, SContainer, FormArea} from './styled'
import Logo from '../../components/img/enel-logo.png';
import { useState } from 'react'
import { cpfMask } from './mask'

const Page = () => {

  const [cpf, setCpf] = useState('')
  const [consumerUnit, setConsumerUnit] = useState('')


  return (
    <SContainer >
      <Sbox>
      <form onSubmit={Event=>{
        Event.preventDefault()
        console.log('foi')
      }}>
        <img src={Logo}/>
        <h2>
          Caso você tenha alguma deficiência visual, posicione o polegar direito no sensor de impressão digital.
        </h2>

          <h1>Login</h1>
        <FormArea>
          <label for="cpfArea">CPF: <br/>
            <input
            maxLength="11"
            autoComplete='off'
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
            <Sbutton>
              Prosseguir
            </Sbutton>
          </label>
        </FormArea>

      </form>
      </Sbox>
    </SContainer>
  )

}

export default Page