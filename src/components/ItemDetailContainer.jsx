import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import GridLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { Id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", Id);

    getDoc(refDoc).then((response) => {
      setProducto({ id: response.id, ...response.data() });
    });
  }, [Id]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 20000);
  }, []);

  if (!producto) return;
  <GridLoader
    color={"blue"}
    loading={loading}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
    className="mt-10 mx-auto bg-blue-200 border-8"
  />;

  return (
    <div className="flex flex-col items-center  bg-blue-200 h-screen">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
