import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (element) => {
    if (isInCart(element)) {
      let newArray = cart.map((product) => {
        // [{}, {}, ]
        if (product.id === element.id) {
          let newProduct = {
            ...product,
            quantity: product.quantity + element.quantity,
          }
          return newProduct
          // return {
          //   ...product,
          //   quantity: product.quantity + element.quantity,
          // }
        } else {
          return product
        }
      })

      setCart(newArray)
    } else {
      setCart([...cart, element])
    }
  }

  const isInCart = (item) => {
    return cart.some((elemento) => elemento.id === item.id)
  }

  const clearCart = ()=>{

    setCart( [] )

  }

  const data = {
    cart,
    addToCart,
    clearCart
  }

  return (
      <CartContext.Provider value={data}>
        {children}
      </CartContext.Provider>
  )

}

export default CartContextProvider

// addToCart( {} )
