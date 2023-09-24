import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-wrap gap-4 w-4/5 m-5 h-2/5 ">
      <table className="table-fixed text-center">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        {products.map((producto) => (
          <tbody>
            <tr>
              <td>
                <img
                  src={producto.image}
                  alt=""
                  className="w-1/5 rounded-xl overflow-hidden text-center"
                />
              </td>
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>{producto.category}</td>
              <td>{producto.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
