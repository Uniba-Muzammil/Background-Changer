import { useState } from 'react'
import './App.css'
import Changer from './Changer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Changer></Changer>
    </>
  )
}

export default App
