
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert'

const Cart = () => {

   const { cart, clearCart } = useContext( CartContext )

   const limpiar = ()=>{

    swal({
      title: "Seguro quieres borrar todo el carrito?",
      text: "Una vez que lo hagas no podras recuperar la informacion!",
      icon: "warning",
      buttons: ["no", "si"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Carrito borrado con exito!", {
          icon: "success",
        });
        clearCart()
      } else {
        swal("Cancelaste la operacion");
      }
    });

   }

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
        <button onClick={()=> limpiar()} >Si, limpiar carrito</button>
      </div>
    </div>
  )
}

export default Cart