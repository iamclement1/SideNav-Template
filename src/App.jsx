import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routing from './Component/routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default App
