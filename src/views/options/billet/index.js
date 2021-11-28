import {Sbox, SboxTutorial} from '../../signin/styled'
import { Sbutton, Container} from "../../../components/buttons/styled";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import Loading from '../reconnection/loading';

const Page = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(true)
    }, 1500);
  },[])

  const styleButton = {
    backgroundColor: '#ff0f64'
  }
  return (<>
    {
      loading === false
      ? <Loading />
      :<Container>
      <SboxTutorial>
        <h1>Estamos imprimindo a segunda via da sua conta mais recente! </h1>
        <br/>
        <br/>
        <br/>
        <Link to="/"><Sbutton style={styleButton}><FontAwesomeIcon className="FontAwesome" icon={['fas', 'undo-alt']} size="lg" />Voltar</Sbutton></Link>
      </SboxTutorial>
    </Container>
    }
  </>
  )

}
export default Page