import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (name, category, image, price, stock, amount) =>
    // console.log(nombre, categoria, imagen, precio, stock, amount);
    setProducts((anterior) => [
      ...anterior,
      {
        name,
        category,
        image,
        price,
        stock,
        amount,
      },
    ]);

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
