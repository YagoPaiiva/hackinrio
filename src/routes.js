import { Switch } from 'react-router-dom'
import RouterHandler from './components/RouterHandler'

import Home from './views/home'
import Billet from './views/options/billet'
import Payment from './views/options/reconnection/payment'
import Three from './views/options/Three'
import Tutorial from './views/options/Tutorial'
import Five from './views/options/Five'
import Help from './views/options/Help'
import SingIn from './views/signin'
import Teste from './views/Teste'

export default () => {
    return <Switch>
        <RouterHandler exact path="/">
            <Home />
        </RouterHandler>
        
        <RouterHandler exact path="/signin">
            <SingIn />
        </RouterHandler>

        <RouterHandler exact path="/billet">
            <Billet />
        </RouterHandler >

        <RouterHandler exact path="/payment">
            <Payment />
        </RouterHandler>

        <RouterHandler exact path="/Three">
            <Three />
        </RouterHandler>

        <RouterHandler exact path="/tutorial">
            <Tutorial/>
        </RouterHandler>

        <RouterHandler exact path="/Five">
            <Five/>
        </RouterHandler>

        <RouterHandler exact path="/Help">
            <Help/>
        </RouterHandler>

        <RouterHandler exact path="/teste">
            <Teste/>
        </RouterHandler>

        </Switch>
}