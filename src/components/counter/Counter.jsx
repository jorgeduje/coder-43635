import CustomButton from "../customButton/CustomButton"

import {useState} from "react"

const Counter = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)

  return (
    <div>

        <h2>{counter}</h2>

        {/* <CustomButton texto={"sumar"} counter={counter} setCounter={setCounter} /> */}
        <button>sumar</button>
        <button>restar</button>
        <button>agregar al carrito</button>
        
    </div>
  )
}

export default Counter