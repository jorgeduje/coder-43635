import "./Navbar.css"

import { Link } from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/" style={{textDecoration: "none"}}>
          <h4 className="logo-navbar">Comision: 43635</h4>
        </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/">
          Todas
        </Link>
        <Link className="navbar-item" to="/category/deportivas">
          Deportivas
        </Link>
        <Link className="navbar-item" to="/category/urbanas">
          Urbanas
        </Link>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar
