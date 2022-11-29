import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"
import Counter from "../counter/Counter"

const ItemListContainer = () => {
  // FLAG o BANDERA

  const [items, setItems] = useState([])

  const onAdd = ( quantity ) => {
    console.log("la cantidad es: ", quantity)
  }

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })

    task
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

    console.log("se hizo la peticion")
  }, [])

  return (
    <div className="light">
      <Counter onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
