import { Product } from "./Productlist";


const Products = ({products, setCartAmount, setCartItems}: {
  products: Product[], 
  setCartAmount: React.Dispatch<React.SetStateAction<number>>,
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
}) => {
  
  const handleClick = (product: Product) => {
    setCartAmount(prev => prev + 1)
    setCartItems(prev => [...prev, product])
      
    }
  

  return (
    <article className="products__con">
      {products.map((product, index) => 
      <section key={index} className="product__container">
          <h2 className="product__title">{product.title}</h2>
          <h3 className="product__author">av {product.author}</h3>
          <p className="product__description">{product.description}</p>
          <button onClick={() => handleClick(product)} className="product__btn">Add to cart</button>
      </section>
      )}
    </article>
  )
}

export default Products