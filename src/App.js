import React from 'react'
import Character from './features/characterMain/Character'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Clans from './features/characterMain/Clans'

import './App.css'
// Should return the standalone component
function App () {
  return (
    <Router>
      <Character />
      <Switch>
      <Route exact path='/clans' component={Clans} />
      </Switch>
    </Router>
  )
}

export default App
