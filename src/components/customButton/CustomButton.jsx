// HOOK ---> estado = useState


const CustomButton = ({ texto, counter, setCounter, onAdd }) => {
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <button onClick={ increment }>+</button>
      <button onClick={ decrement }>-</button>
      <button onClick={()=>onAdd(counter)}>agregar al carrito</button>
    </>
  )
}

export default CustomButton

// let palabras = ["hola", "chau", "casa"]

// // let primera = palabras[0]
// // let segunda = palabras[1]
// // let tercera = palabras[2]

// let [ primera, x , tercera ] = palabras
