import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const totalProductsInWidget = products.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const isInCart = (id) => products.some((item) => item.id === id);

  const addItem = (producto, amount) => {
    if (!isInCart(producto.id)) {
      setProducts((prev) => [...prev, { ...producto, amount }]);
    } else {
      const productosActualizados = products.map((item) => {
        if (item.id === producto.id)
          return {
            ...item,
            amount: item.amount + amount,
          };
        else return item;
      });
      setProducts(productosActualizados);
    }
  };

  const removeItem = (id) => {
    const productsAfterRemovedItem = products.filter((item) => item.id !== id);
    setProducts(productsAfterRemovedItem);
  };

  const clear = () => setProducts([]);

  const calculateTotalPrice = products.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        totalProductsInWidget,
        products,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
