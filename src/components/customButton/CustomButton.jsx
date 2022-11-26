
// HOOK ---> estado = useState

import { useState } from "react"

const CustomButton = ({ texto, counter, setCounter }) => {

    const sumar = ()=>{
        setCounter( counter + 1)
    }

  return (

    <>
      <button onClick={sumar}>{texto}</button>
      {/* <h2>{counter}</h2> */}
    </>

  );
};

export default CustomButton;


// let palabras = ["hola", "chau", "casa"]

// // let primera = palabras[0]
// // let segunda = palabras[1]
// // let tercera = palabras[2]

// let [ primera, x , tercera ] = palabras

