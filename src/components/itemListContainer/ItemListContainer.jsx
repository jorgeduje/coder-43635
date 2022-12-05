import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"
import ItemCount from "../itemCount/ItemCount"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const productosFiltered = products.filter(
      (productos) => productos.category === categoryName
    )

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltered : products)
      }, 500)
    })

    task
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [categoryName])

  return (
    <div className="light">
      <ItemCount initial={1} stock={7} />
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
