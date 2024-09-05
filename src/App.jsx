import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count + 1)
  }
  function handleDecrement(){
    setCount(count - 1)
  }
  return (
    <>
    <Navbar/>
    {/* <button onClick={handleIncrement}>+</button>
    <p>{count}</p>
    <button onClick={handleDecrement}>-</button> */}
    <Home />
    </>
  )
}

export default App
