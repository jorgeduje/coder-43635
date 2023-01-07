
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/cart/Cart";

import CartContextProvider from "./context/CartContext";
import Form from "./components/form/Form";
import FormikFormulario from "./components/formik/FormikFormulario";


function App() {

  // CREAR EL ENRUTADO

  return (
   
    <BrowserRouter>
      <CartContextProvider>

        <Navbar />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          
          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

          <Route path="/checkout" element={ <Form /> } />

          <Route path="/cart" element={ <Cart /> } />

          <Route path="/formik" element={ <FormikFormulario /> } />

          <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />

        </Routes>

      </CartContextProvider>
    </BrowserRouter>

  );
  
}

export default App;
