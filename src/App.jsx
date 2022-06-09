import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Pages from './Pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div className="App pt-4">
        <Pages />
      </div>
    </Router>
  )
}

export default App
