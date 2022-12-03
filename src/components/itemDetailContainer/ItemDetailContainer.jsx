
import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  console.log( id )

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === parseInt(id) )
    setProduct(productSelected)

  }, [id])

  console.log(product)

  return (
    <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default ItemDetailContainer