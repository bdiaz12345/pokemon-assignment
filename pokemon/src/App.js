import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Favorites from './views/Favorites'

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>

            <Route path='/favorites'>
                <Favorites />
            </Route>
        </Switch>
    )
}

export default App