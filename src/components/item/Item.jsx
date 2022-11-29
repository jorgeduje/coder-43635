
import "./Item.css"

const Item = ({element}) => {


  return (
    <div className="card">
      <h2>{element.name}</h2>
      <img src={element.img} alt="" />
      <h3>${element.price}</h3>
      <h4>Ver detalle</h4>
    </div>
  );
};

export default Item;
