import { useState, useEffect } from "react";
import Counter from "../counter/Counter";

import "./ItemListContainer.css";
// import CustomButton from "../customButton/CustomButton"

import { products } from "../../productsMock";

import ProductsCard from "../productsCard/ProductsCard";

const ItemListContainer = ({ greeting }) => {
  // FLAG o BANDERA
  const [isDark, setIsDark] = useState(false);
  const [num, setNum] = useState(0);

  const [items, setItems] = useState([]);

  const tooggleMode = () => {
    setIsDark(!isDark);
  };

  // useEffect( ()=>{
  //   console.log( "hola dentro del primer efecto")
  // })

  // useEffect( ()=>{
  //   console.log("hola desde el efecto con array de dependencia vacio")
  // } , []) // ARREGLO DE DEPENDENCIAS VACIO

  // useEffect( ()=>{
  //   console.log("hola desde el efecto con array de dependencia a la escucha de NUM")
  // } , [ num ]) // ARREGLO DE DEPENDENCIAS

  const onAdd = () => {
    console.log("hola");
  };

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("se rechazo");
      });

    console.log("se hizo la peticion");
  }, []);

  console.log(items);

  return (
    <div className={isDark ? "dark" : "light"}>
    

      {items.map((element) => {
        return (
          <ProductsCard key={element.name} element={element} />
        );
      })}

      {/* <ItemList items={item}/> */}
    </div>
  );
};

export default ItemListContainer;
