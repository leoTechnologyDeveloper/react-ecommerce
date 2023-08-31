import React from "react";
import data from "../data/data.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

// console.log(data);

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    // myPromise.then((data) => setProductos(data));

    myPromise.then((data) => {
      if (!id) {
        setProductos(data);
      } else {
        const productsInCategory = data.filter(
          (producto) => producto.categoria === id
        );
        setProductos(productsInCategory);
      }
    });
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
