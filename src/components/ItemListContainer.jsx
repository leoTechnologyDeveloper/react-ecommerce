// import data from "../data/data.json";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  //**  USE EFFECTS WORKING BEFORE ****************/

  // useEffect(() => {
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(data), 1000);
  //   });

  //   myPromise.then((data) => setProductos(data));
  // }, []);

  // useEffect(() => {
  //   if (categoriaId) {
  //     let categoriaFiltrados = data.filter(
  //       (item) => item.category === categoriaId
  //     );
  //     setProductos(categoriaFiltrados);
  //     console.log("Buscanto categoria :  ", categoriaId);
  //     console.log(typeof categoriaId);
  //     console.log("Los filtrados son ", categoriaFiltrados);
  //   } else {
  //     setProductos(data);
  //   }
  // }, [categoriaId]);

  //** TILL HHERE -  USE EFFECTS WORKING BEFORE ****************/

  // useEffect(() => {
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(data), 1000);
  //   });

  //   myPromise.then((data) => setProductos(data));
  // }, []);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = categoriaId
      ? query(collection(db, "productos"), where("category", "==", categoriaId))
      : collection(db, "productos");

    getDocs(refCollection).then((response) => {
      if (response.size === 0) setProductos([]);
      else
        setProductos(
          response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [categoriaId]);

  // ---------------------------

  return productos.length === 0 ? (
    <p>... Un Momento, cargando stock</p>
  ) : (
    <div className="flex flex-col items-center bg-blue-200 h-screen">
      {title}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
