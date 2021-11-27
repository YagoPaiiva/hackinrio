import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const Page = () => {

    return ( 
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
    )
}

export default Page;