
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

   const { cart, clearCart } = useContext( CartContext )

    

  return (
    <div>
      {
        cart.map( item => (
          <div key={item.id} >
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <h2>{item.quantity} unidades</h2>
          </div>
        ))
      }

      <div>
        <h2 style={{ fontFamily: 'Rubik Storm'}}>Quieres limpiar el carrito</h2>
        <button onClick={()=> clearCart()} >Si, limpiar carrito</button>
      </div>
    </div>
  )
}

export default Cart