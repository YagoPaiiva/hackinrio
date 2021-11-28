import { Link } from "react-router-dom"
import { Sbutton } from "../../components/buttons/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Page = () => {
  const styleButton = {
    backgroundColor: '#ff0f64'
  }
  return(
    <>
    <h1>Feature indisponível para o MVP.</h1>
    <Link to="/"><Sbutton style={styleButton}>Voltar</Sbutton></Link>
    </>
  )
}
export default Page