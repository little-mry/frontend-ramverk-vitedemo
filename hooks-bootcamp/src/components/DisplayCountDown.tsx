import { useEffect, useState } from "react"

const DisplayCountDown = ({countDown, setCountDown}: {countDown: number, setCountDown: React.Dispatch<React.SetStateAction<number>>}) => {
    const [isRunning, setIsRunning] = useState(false)
    const [inputValue, setInputValue]= useState(0)
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value)
        setCountDown(value)
        setInputValue(value)
    }

    function startCountDown() {
        setIsRunning(true)
    }

    function pauseCountDown() {
        setIsRunning(false)
    }

    function resetCountDown() {
        setIsRunning(false)
        setCountDown(0)
        setInputValue(0)
    }


    useEffect(() => {
        if (!isRunning || countDown <= 0) return
    
        const timer = setTimeout(() => {
            setCountDown(prev => prev -1)
        }, 1000);
    
        return() => clearTimeout(timer)
      }, [isRunning, countDown])

  return (
    <section>
        <article>
            <form action="">
                <h1 className="countdown__heading">Nedräknaren</h1>
                <h3>Välj hur många sekunder du vill räkna ner:</h3>
                <input type="number" min='0' value={inputValue} onChange={handleChange} />
            </form>
        </article>
        <article className="countdown__container">
            <h2 className="countdown__counter">{countDown}</h2>

            <button className="btn__start" onClick={startCountDown}>STARTA</button>
            <section>
                <button className="btn__pause" onClick={pauseCountDown}>PAUSA</button>
                <button className="btn__reset" onClick={resetCountDown}>RESET</button>
            </section>
        </article>
    </section>
  )
}

export default DisplayCountDown