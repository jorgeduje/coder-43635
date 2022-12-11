import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import swal from 'sweetalert'

const ItemDetail = ( { product } ) => {

  const { addToCart } = useContext( CartContext )

  const onAdd = ( quantity ) => {
    
    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )
    
    swal({
      title: "Operacion Exitosa!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      button: "Ok",
    });
  }

  
  return (
    <div>
      <div style={{border: "2px solid black"}} onClick={()=>console.log("le di click al div")} >
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.description}</h2>
      </div>

      <ItemCount onAdd={onAdd} stock={product.stock} />

    </div>
  )
}

export default ItemDetail