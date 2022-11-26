
import Counter from "./components/counter/Counter";
import CustomButton from "./components/customButton/CustomButton";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"


function App() {

  return (
    <div>
      <Navbar />

      <Counter />

      <ItemListContainer greeting={"Hola jorge como estas"} />

      
    </div>
  );
  
}

export default App;


// ItemListContainer( a, b)
// <ItemListContainer a={"hola"} b={true} />
