import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const productosFiltered = products.filter(
      (productos) => productos.category === categoryName
    )

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltered : products)
      }, 500)
    })

    getProducts
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [categoryName])

  return (
    <div className="light">
      
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
