// rafce --> export default || rafc --> export nombrado

import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"

export const CartWidget = () => {
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
          <span>12</span>
        </div>
      </Link>
    </div>
  )
}
