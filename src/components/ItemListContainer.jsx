import data from "../data/data.json";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    myPromise.then((data) => setProductos(data));
  }, []);

  useEffect(() => {
    if (categoriaId) {
      let categoriaFiltrados = data.filter(
        (item) => item.categoria === categoriaId
      );
      setProductos(categoriaFiltrados);
      console.log("Buscanto categoria :  ", categoriaId);
      console.log(typeof categoriaId);
      console.log("Los filtrados son ", categoriaFiltrados);
    } else {
      setProductos(data);
    }
  }, [categoriaId]);

  // ---------------------------

  return productos.length === 0 ? (
    <p>... Un Momento, cargando stock</p>
  ) : (
    <div className="flex flex-col items-center">
      {title}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
