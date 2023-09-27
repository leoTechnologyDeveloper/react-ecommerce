import carrito from "./carrito-de-compras.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  const { totalProductsInWidget } = useContext(CartContext);

  return (
    <div className=" flex gap-2  p-2  bg-white rounded-lg">
      <img src={carrito} alt="imagen carrito" className="w-10" />
      <p className="text-2xl  text-blue-800">{totalProductsInWidget}</p>
    </div>
  );
};

export default CartWidget;
