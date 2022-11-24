import "./Navbar.css";


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
        <li className="navbar-item">{nombre}</li>
        <li className="navbar-item">Deportivas</li>
        <li className="navbar-item">Urbanas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
