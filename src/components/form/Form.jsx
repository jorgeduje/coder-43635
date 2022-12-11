import { useState } from "react"

const Form = () => {
//   const [name, setName] = useState("")
//   const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState( {name:"", lastName: ""} )

  

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(userData)
  }


//   const handleChangeName = (event) => {
//     setUserData( {...userData, name: event.target.value } )
//   }

//   const handleChangeLastName = (event)=>{

//       setLastName(event.target.value)

//   }

const handleKey = ( event )=>{
    
    if(event.key !== " " ){

        console.log(event.key)
        
    }else{
        event.preventDefault() // NO LA CAPTURA EL ONCHANGE Y NO SE ESCRIBE EN EL INPUT
    }

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
          onKeyDown={handleKey}
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
