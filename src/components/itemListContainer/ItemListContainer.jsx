import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import ItemList from "../itemList/ItemList"

import { useParams } from "react-router-dom"
import DotLoader from "react-spinners/DotLoader";

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  console.log(categoryName)

  useEffect(() => {

    setIsLoading(true)

    // const productosFiltered = products.filter(
    //   (productos) => productos.category === categoryName
    // )

    // const getProducts = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(categoryName ? productosFiltered : products)
    //   }, 500)
    // })

    // getProducts
    //   .then((res) => {
    //     setItems(res)
    //   })
    //   .catch((err) => {
    //     console.log("se rechazo")
    //   })

    const itemCollection = collection( db, "products" )

    if( categoryName ){
      const q = query( itemCollection, where( "category" , "==" , categoryName ) )
      getDocs(q)
      .then( (res) => {
        const products = res.docs.map( product => { // [{}, {}]
          return {
            
            ...product.data(),
            id: product.id
          }
        } )

        setItems(products)
      })
      .catch( (err) => console.log(err))

    }else{

      getDocs(itemCollection)
      .then( (res) => {
        const products = res.docs.map( product => { // [{}, {}]
          return {
            
            ...product.data(),
            id: product.id
          }
        } )

        setItems(products)
      })
      .catch( (err) => console.log(err))

    }

    

      setTimeout( ()=>{
        setIsLoading(false)
      }, 1000)

  }, [categoryName])

  return (
    <div className="light">
      
      {
        isLoading ? <DotLoader
        color={"purple"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <ItemList items={items} />
      }

      {/* <ItemList items={items} /> */}
    </div>
  )
}

export default ItemListContainer
