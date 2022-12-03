import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"
import ItemCount from "../itemCount/ItemCount"

const ItemListContainer = () => {

  const [items, setItems] = useState([])


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
      <ItemCount initial={1} stock={7}/>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
