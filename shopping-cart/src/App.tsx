import { useState } from 'react'
import Header from './components/Header'
import Productlist from './components/Productlist'
import { Product } from './components/Productlist'


import './App.css'

const App = () => {
  const [cartAmount, setCartAmount] = useState(0)
  const [cartItems, setCartItems] = useState<Product[]>([])
 


  return (
    <>
      <Header cartAmount={cartAmount} cartItems={cartItems} />
      <Productlist setCartAmount= {setCartAmount} setCartItems={setCartItems}/>
    </>
  )
}

export default App
