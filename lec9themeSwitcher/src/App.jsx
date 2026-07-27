import {useState} from 'react';
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Crad';

function App() {
  const[themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')
  }
  const isDark = themeMode === 'dark'

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className={`flex flex-wrap min-h-screen items-center transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
