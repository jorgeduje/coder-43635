import { useState } from "react"

const Form = () => {
//   const [name, setName] = useState("")
//   const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState( {name:"", lastName: ""} )

  

  const handleSubmit = (event) => {
    event.preventDefault()
    

    console.log(userData)
  }




  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event)=> setUserData( {...userData, name: event.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={(event) => setUserData( {...userData, lastName: event.target.value} )}
          value={userData.lastName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form

// FORMIK y YUP
