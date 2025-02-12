import { Product } from "./Productlist";
import { useState } from "react";



const Cart = ({ cartAmount, cartItems }: {cartAmount: number, cartItems: Product[]}) => {
  
  const [cartVisibility, setCartVisibility] = useState(false)
   
  const toggleDropdown = () => {
   setCartVisibility(prev => !prev)
  }
  

  return (
    <>
      <article onClick={toggleDropdown} className='cart__dropdown__container '>
        <section className="cart__container">
            <p className='cart__title'>Cart</p>
            <p className='cart__amount'>{cartAmount}</p>
        </section>
        {cartVisibility && (
        <section className='cart__dropdown'>
            <ul className="cart__list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart__listitem">{item.title} av {item.author} </li>
              ))}
            </ul>
        </section>
        )}
      </article>
    </>
  )
}


export default Cart