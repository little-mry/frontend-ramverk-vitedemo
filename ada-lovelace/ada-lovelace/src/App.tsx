import Image from "./components/Image";
import About from "./components/About";

function App() {
  const name: string = 'Ada Lovelace'

  return (
    <main className="main">
      <h1>{name}</h1>
      <Image />
      <About />
    </main>
  )
}

export default App
