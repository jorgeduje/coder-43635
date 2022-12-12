import React from "react"
import "./CartItem.css"

const CartItem = ({ item }) => {
  return (
    <div key={item.id} className="cart-item">
      <img src={item.img} alt="" />
      <div className="cart-item-info">
        <h2>{item.name}</h2>
        <h2>${item.price}.-</h2>
        <h2>Unidades: {item.quantity}</h2>
      </div>
    </div>
  )
}

export default CartItem
