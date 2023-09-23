import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (amount) => addItem(producto, amount);
  // console.log("producto recibido", producto);

  return (
    <div className="flex items-center rounded-lg border-solid border-2 w-2/5 ">
      <div className="w-2/4">
        <img
          className="h-1/5 overflow-hidden"
          src={producto.image}
          alt="Imagen de "
        />
      </div>
      <div className="flex flex-col items-center p-2 text-center mx-auto">
        <p className="text-5xl my-1 text-blue-500">{producto.name}</p>
        <p className="text-xl my-1">Precio : {producto.price}</p>
        <p className="text-xl my-1">Categoría: {producto.category}</p>
        <p className="text-xl my-1">Stock Actual: {producto.stock}</p>
        <ItemCount onAdd={onAdd} stock={producto.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
