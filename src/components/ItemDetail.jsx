import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ name, category, image, price, stock }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (amount) =>
    addItem(name, category, image, price, stock, amount);

  return (
    <div className="flex items-center rounded-lg border-solid border-2 w-2/5 ">
      <div className="w-2/4">
        <img className="h-1/5 overflow-hidden" src={image} alt="Imagen de " />
      </div>
      <div className="flex flex-col items-center p-2 text-center mx-auto">
        <p className="text-5xl my-1 text-blue-500">{name}</p>
        <p className="text-xl my-1">Precio : {price}</p>
        <p className="text-xl my-1">Categoría: {category}</p>
        <p className="text-xl my-1">Stock Actual: {stock}</p>
        <ItemCount onAdd={onAdd} stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
