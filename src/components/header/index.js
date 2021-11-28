import { SHeader , NavBar} from './styled'
import logo from '../img/enel-logo.png'
import { Link } from 'react-router-dom'

const PageHeader = () => { 
  return(
    <SHeader>
    <NavBar>
      <Link to="/"><img src={logo} alt="" /></Link>
    </NavBar>
      
    </SHeader>
  )
}

export default PageHeader