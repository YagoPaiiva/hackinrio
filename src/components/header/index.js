import { SHeader , NavBar} from './styled'
import logo from '../img/enel-logo.png'
import { Link } from 'react-router-dom'

const PageHeader = () => { 
  return(
    <SHeader>
    <NavBar>
     <img src={logo} alt="" />
    </NavBar>
      
    </SHeader>
  )
}

export default PageHeader