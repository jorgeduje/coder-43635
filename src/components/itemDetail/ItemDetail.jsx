import React from 'react'

const ItemDetail = ( {product} ) => {

  
  return (
    <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default ItemDetail