import { useState } from "react"
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../../firebaseConfig"

const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" })

  const total = getTotalPrice()

  const handleSubmit = (event) => {
    event.preventDefault()

    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    }

    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then((res) => setOrderId(res.id))

    cart.map((product) => (
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    ))

    clearCart()
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(event) =>
            setUserData({ ...userData, phone: event.target.value })
          }
          value={userData.phone}
        />
        <input
          type="email"
          placeholder="Ingrese su email"
          name="email"
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          value={userData.email}
        />
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  )
}

export default Form

