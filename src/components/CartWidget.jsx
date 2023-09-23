import carrito from "./carrito-de-compras.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  const { totalProductsInWidget } = useContext(CartContext);

  return (
    <div className="self-center flex gap-2 bg-white p-2 rounded-xl">
      <img src={carrito} alt="imagen carrito" className="w-10" />
      <p className="text-2xl my-1 text-blue-800">{totalProductsInWidget}</p>
    </div>
  );
};

export default CartWidget;
