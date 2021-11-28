import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import PageHeader from './components/header';

const Page = () => {

    return ( 
      <BrowserRouter >
        <PageHeader />
        
        <Routes />
      </BrowserRouter>
    )
}

export default Page;