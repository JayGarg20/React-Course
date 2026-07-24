/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
