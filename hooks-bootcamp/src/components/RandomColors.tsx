import { useEffect, useState } from "react";

const RandomColors = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [color, setColor] = useState(generateRandomColor())
  let btnText = isRunning ? 'STOP' : 'START'

    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`; 
      }


    /* LOGGA FÄRGEN I KONSOLEN */

    
    function changeColor() {
        setColor(generateRandomColor)
    }

    function startRandom() {
      setIsRunning(prev => !prev)
    }

    useEffect(() => {
      if (!isRunning) return
    
      const changeColor = setInterval(() => {
        setColor(generateRandomColor()) 
      }, 1000);
      return() => clearInterval(changeColor)
    }, [isRunning, color])
    

  return (
    <>
        <section className="color__box" style={{backgroundColor: color}}></section>
        <button className="btn color_update__btn" onClick={changeColor}>UPDATE COLOR</button>
        <button className="btn auto-color__update__btn" onClick={startRandom} >{btnText} RANDOMIZE</button>
    </>
  )
}

export default RandomColors