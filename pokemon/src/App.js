import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Favorites from './views/Favorites'
import Start from './views/Start'

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Start />
            </Route>

            <Route path='/pokedex'>
                <Home />
            </Route>

            <Route path='/favorites'>
                <Favorites />
            </Route>
        </Switch>
    )
}

export default App