import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ErrorPage from "../components/ErrorPage";

const Cart = () => {
  const { products, calculateTotalPrice, removeItem, clear } =
    useContext(CartContext);

  return (
    <div className="flex gap-4 w-4/5 h-2/5 m-auto content-center ">
      {products.length === 0 ? (
        <ErrorPage title="No hay productos en el carrito" />
      ) : (
        <table className="table-fixed text-blue-800 text-center mx-auto mt-5 w-4/5 text-xl">
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
          <tbody className="bg-gray-200">
            {products.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <img
                    src={producto.image}
                    alt=""
                    className="w-16 rounded-full overflow-hidden text-center m-2 mx-auto object-cover"
                  />
                </td>
                <td>{producto.name}</td>
                <td>{producto.category}</td>
                <td>{producto.amount}</td>
                <td>${producto.price}</td>
                <td>
                  <button
                    className="cursor-pointer text-red-500 bg-white p-1 px-2 rounded-lg font-extrabold border-2 border-blue-500 border-solid hover:bg-blue-500 hover:text-white"
                    onClick={() => removeItem(producto.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-blue-200 p-4">
              <th></th>
              <th></th>
              <th></th>
              <th className="bg-lime-200 p-3">TOTAL</th>
              <th className="bg-lime-200 p-3 font-extrabold text-3xl">
                ${calculateTotalPrice}
              </th>
              <th className="bg-blue-500">
                <button
                  className="cursor-pointer text-red-500 bg-white p-1 px-2 rounded-lg font-bold border-2 border-blue-500 border-solid hover:bg-blue-500 hover:text-white "
                  onClick={() => clear()}
                >
                  Borrar Todo
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
