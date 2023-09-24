import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ErrorPage from "../components/ErrorPage";

const Cart = () => {
  const { products, calculateTotalPrice, removeItem } = useContext(CartContext);

  return (
    <div className="flex  gap-4 w-4/5 h-2/5  m-auto content-center">
      {products.length === 0 ? (
        <ErrorPage title="No hay productos en el carrito" />
      ) : (
        <table className="table-fixed text-blue-800 text-center mx-auto mt-5 w-4/5 text-xl ">
          <thead className="bg-blue-200 ">
            <tr className="py-2">
              <th>Producto</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          {products.map((producto) => (
            <tbody className="bg-gray-200">
              <tr>
                <td>
                  <img
                    src={producto.image}
                    alt=""
                    className="w-20 rounded-full overflow-hidden text-center m-4 mx-auto"
                  />
                </td>
                <td>{producto.name}</td>
                <td>{producto.category}</td>
                <td>{producto.amount}</td>
                <td>{producto.price}</td>
                <td>
                  <button
                    className="cursor-pointer text-red-500 bg-white p-1 px-2 rounded-lg font-extrabold border-2 border-blue-500 border-solid hover:bg-blue-500 hover:text-white"
                    onClick={() => removeItem(producto.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>TOTAL</th>
              <th>{calculateTotalPrice}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
