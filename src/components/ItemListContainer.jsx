import React from "react";
import data from "../data/data.json";
import { useState, useEffect } from "react";
import Item from "./Item";

console.log(data);

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 3000);
    });

    myPromise.then((data) => setProductos(data));
  }, []);

  // console.log("productos son ", productos);

  return productos.length === 0 ? (
    <p>Loading ...</p>
  ) : (
    <div className="containerItemList  w-10/12 p-10 text-center m-auto text-5xl flex gap-4">
      {/* <h2>{title}</h2> */}
      {productos.map((producto) => (
        <Item producto={producto.product} imagen={producto.imagen} />
      ))}
    </div>
  );
};

export default ItemListContainer;
