import CustomButton from "../customButton/CustomButton"

import { useState } from "react"

const Counter = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  return (
    <div>
      <h2>{counter}</h2>

      <CustomButton
        counter={counter}
        setCounter={setCounter}
        onAdd={onAdd}
        stock={stock}
      />
    </div>
  )
}

export default Counter
