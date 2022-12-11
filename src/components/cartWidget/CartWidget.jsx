// rafce --> export default || rafc --> export nombrado

import { useContext } from "react"
import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {

  const { cart } = useContext( CartContext )


  return (
    <div className="container-cart">
      <Link to="/cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "black",
          }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </Link>
    </div>
  )
}
