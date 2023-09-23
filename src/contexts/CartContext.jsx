import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (producto, amount) =>
    setProducts((prev) => [...prev, { ...producto, amount }]);

  // const addItem = (producto, amount) => {
  //   const yaExiste = products.some((item) => item.id === producto.id);

  //   if (!yaExiste) {
  //     setProducts((prev) => [...prev, { ...producto, amount }]);
  //   } else {
  //     const productosActualizados = products.map((item) => {
  //       if (item.id === producto.id)
  //         return {
  //           ...item,
  //           amount: item.amount + amount,
  //         };
  //       else return item;
  //     });
  //     setProducts(productosActualizados);
  //   }
  // };

  const removeItem = (id) => {
    const productsAfterRemovedItem = products.filter((item) => item.id !== id);
    setProducts(productsAfterRemovedItem);
  };

  const clear = () => setProducts([]);

  console.log("Los productos del carrito son");
  console.log(products);

  //   const [numClicks, setnumClicks] = useState(1);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
