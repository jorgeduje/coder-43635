import { Button } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  useEffect(() => {
    setCounter(initial)
  }, [initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="container-btn">
      <h2>Cantidad: {counter}</h2>
      <div className="btns">
        <Button variant="outlined" onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={() => onAdd(counter)}>
          agregar al carrito
        </Button>
        <Button variant="outlined" onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  )
}

export default ItemCount
