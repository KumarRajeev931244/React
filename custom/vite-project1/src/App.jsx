import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = function(){
    if(counter<20){
      counter = counter + 1
      setCounter(counter)
    }
  }
  const subValue = function(){
    if(counter >0){
      counter = counter - 1;
      setCounter(counter)
    }
  }
  

  return (
    <>
    <h1>Hello Rajeev</h1>
    <h2>counter Value:{counter}</h2>
    <button onClick={addValue}>Add Value</button><br />
    <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
