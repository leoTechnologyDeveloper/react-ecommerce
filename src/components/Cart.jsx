import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ErrorPage from "../components/ErrorPage";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { products, calculateTotalPrice, removeItem, clear } =
    useContext(CartContext);

  const [formValues, setformValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setformValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log("products");
  // console.log(products);
  // console.log("total compra");
  // console.log(calculateTotalPrice);
  // console.log("datos comprador");
  // console.log(formValues);

  // const sendOrder2 = () => console.log(formValues);

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      products,
      total: calculateTotalPrice,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setformValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert(`Su orden ${id} ha sido completada !`);
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 w-4/5 h-2/5 m-auto content-center ">
      {products.length === 0 ? (
        <ErrorPage title="No hay productos en el carrito" />
      ) : (
        <>
          <table className="table-fixed text-blue-800 text-center mx-auto mt-5 w-full text-xl">
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

          {/* begin form  ************************************** */}

          <form className="space-y-2 w-4/12 " action="/" method="POST">
            <div className="flex items-center justify-between">
              <label className="block font-medium leading-6 text-white bg-blue-500 w-full text-center px-2 py-1 text-2xl ">
                ORDEN DE COMPRA
              </label>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  name
                </label>
              </div>
              <div className="mt-0">
                <input
                  id="name"
                  name="name"
                  value={formValues.name}
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Teléfono
                </label>
              </div>
              <div className="mt-0">
                <input
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  type="number"
                  autoComplete="current-phone"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-0">
                <input
                  id="email"
                  name="email"
                  value={formValues.email}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Link to={"/"}>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={sendOrder}
                >
                  Comprar
                </button>
              </Link>
            </div>
          </form>

          {/* end form  ***************************************** */}

          {/* <button
            onClick={() => sendOrder()}
            className="w-1/5 px-4 py-2 rounded-xl text-3xl bg-blue-600 text-white hover:bg-orange-500  hover:text-black"
          >
            Comprar
          </button> */}
        </>
      )}
    </div>
  );
};

export default Cart;
