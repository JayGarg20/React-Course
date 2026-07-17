// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card';

function App() {
  let myObj = {
    name: "Tailwind CSS",
    description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides a set of pre-defined classes that can be composed to create unique designs without writing custom CSS.",
  }
  // eslint-disable-next-line no-unused-vars
  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello, Tailwind CSS!</h1>
      <Card userName="Tailwind CSS" someObj={myObj} newArr={newArr} />

    </>
  )
}
  


export default App
