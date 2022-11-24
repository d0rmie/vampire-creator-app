import React from 'react'
import Character from './features/characterMain/Character'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
// Should return the standalone component
function App () {
  return (
    <Router>
      <Character />
    </Router>
  )
}

export default App
