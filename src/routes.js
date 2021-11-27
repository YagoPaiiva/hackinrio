import { Switch } from 'react-router-dom'
import RouterHandler from './components/RouterHandler'

import Home from './views/home'
import One from './views/options/One'
import Two from './views/options/Two'
import Three from './views/options/Three'
import Four from './views/options/Four'
import Five from './views/options/Five'
import Help from './views/options/Help'
import SingIn from './views/signin'

export default () => {
    return <Switch>
        <RouterHandler exact path="/">
            <Home />
        </RouterHandler>
        
        <RouterHandler exact path="/signin">
            <SingIn />
        </RouterHandler>

        <RouterHandler exact path="/One">
            <One />
        </RouterHandler >

        <RouterHandler exact path="/Two">
            <Two />
        </RouterHandler>

        <RouterHandler exact path="/Three">
            <Three />
        </RouterHandler>

        <RouterHandler exact path="/Four">
            <Four/>
        </RouterHandler>

        <RouterHandler exact path="/Five">
            <Five/>
        </RouterHandler>

        <RouterHandler exact path="/Help">
            <Help/>
        </RouterHandler>

        </Switch>
}