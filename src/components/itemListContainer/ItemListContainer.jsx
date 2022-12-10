import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"

import { useParams } from "react-router-dom"
import AccordionMui from "../accordionMui/AccordionMui"
import CustomLoader from "../customLoader/CustomLoader"

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyIcon from '@mui/icons-material/Key';

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
      }, 5000)
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

      { items.length > 0 ? <ItemList items={items} /> : <CustomLoader /> }
      
      <AccordionMui />

      <ShoppingCartOutlinedIcon fontSize="large"  color="success" />
      <KeyIcon />

    </div>
  )
}

export default ItemListContainer
