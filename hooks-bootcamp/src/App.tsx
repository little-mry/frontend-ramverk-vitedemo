import RandomColors from "./components/RandomColors"
import './App.css'

const App = () => {
  return (
    <RandomColors />
  )
}

export default App

/* 
Medelnivå: Övning 2 – Slumpmässiga färger

Instruktioner:
Skapa en React-komponent som visar en ruta med en bakgrundsfärg. Lägg till en knapp som, när den klickas, ändrar rutan till en slumpmässig färg. Använd useEffect för att logga den nya färgen i konsolen varje gång bakgrundsfärgen uppdateras. 
Utmaning:
Lägg till en funktion som gör att färgen ändras automatiskt varannan sekund, och låt användaren starta och stoppa detta med en knapp. */










/* NEDRÄKNINGSTIMER 
import { useState } from 'react'
import './App.css'

import DisplayCountDown from './components/DisplayCountDown'

const App = () => {
  const [countDown, setCountDown] = useState(0)
  return (
    <>
      <DisplayCountDown countDown={countDown} setCountDown={setCountDown}/>
    </>
  )
}

export default App */
