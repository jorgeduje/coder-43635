import "./Navbar.css";

import {Link} from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

    const nombre = "Todas"

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png"
          alt=""
        />
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" >Todas</Link>
        <Link className="navbar-item" to="/category/deportivas" >Deportivas</Link>
        <Link className="navbar-item" to="/category/urbanas" >Urbanas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
