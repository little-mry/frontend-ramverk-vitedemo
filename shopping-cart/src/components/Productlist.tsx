import Products from "./Products"

export interface Product {
    title: string,
    author: string,
    description: string
}



const Productlist = ({ setCartAmount, setCartItems }: { 
    setCartAmount: React.Dispatch<React.SetStateAction<number>>,
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
}) => {
    const products: Product[] = [
        {
            title: 'A Sign of Four',
            author: 'Sir Author Conan Doyle',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellat, tempora autem praesentium eum natus amet molestiae. Facilis molestiae ea voluptate, fugiat laudantium, quia aspernatur dolor quidem tempore, perferendis tempora!'
        },
        {
            title: 'The Adventure of Sherlock Holmes',
            author: 'Sir Author Conan Doyle',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellat, tempora autem praesentium eum natus amet molestiae. Facilis molestiae ea voluptate, fugiat laudantium, quia aspernatur dolor quidem tempore, perferendis tempora!'
        },
        {
            title: 'A Study in Scarlet',
            author: 'Sir Author Conan Doyle',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellat, tempora autem praesentium eum natus amet molestiae. Facilis molestiae ea voluptate, fugiat laudantium, quia aspernatur dolor quidem tempore, perferendis tempora!'
        },
        {
            title: 'Baskervilles Hound',
            author: 'Sir Author Conan Doyle',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellat, tempora autem praesentium eum natus amet molestiae. Facilis molestiae ea voluptate, fugiat laudantium, quia aspernatur dolor quidem tempore, perferendis tempora!'
        }
    ]
    return (
    <Products products={products} setCartAmount={setCartAmount} setCartItems={setCartItems} />
  )
}

export default Productlist

 