import React from "react"
import ProductsCard from "../productsCard/ProductsCard"
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="container-cards">
      {items.map((element) => {
        return <ProductsCard key={element.name} element={element} />
      })}
    </div>
  )
}

export default ItemList
