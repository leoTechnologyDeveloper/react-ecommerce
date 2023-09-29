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
import GridLoader from "react-spinners/ClipLoader";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

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
    <GridLoader
      color={"blue"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="mt-10 mx-auto bg-blue-200 border-8"
    />
  ) : (
    <div className="flex flex-col items-center bg-blue-100  bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover  ">
      {title}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
