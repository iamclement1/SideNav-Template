import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routing from './Component/routes/routes'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routing />
      </div>
    </Router>
  )
}

export default App
