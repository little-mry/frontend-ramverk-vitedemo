import Cart from "./Cart"
import { Product } from "./Productlist"

const Header = ({cartAmount, cartItems}: {cartAmount: number, cartItems: Product[]}) => {
  return (
    <>
    <header className='header__shopping-cart'>
        <img className='logo' src="./public/assets/books-logo.png" alt="logo" />
        <h1>Shopping Cart</h1>
        <Cart cartAmount= {cartAmount} cartItems={cartItems}/>
    </header>
    </>
  )
}

export default Header