import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  // let counter = 5;
    const addValue = () => {
      if(counter >= 20){
        alert("Counter value cannot be more than 20");
        return;
      }
      setCounter(counter + 1);
    }
  const removeValue = () => {
    if(counter <= 0){
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value </button>
      <p></p>
    </>
  )
}

export default App
