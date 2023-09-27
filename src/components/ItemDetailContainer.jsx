import data from "../data/data.json";
import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import GridLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { Id } = useParams();

  // console.log("el id en params buscado es ", Id);

  // ******* THE FIRST EFFECT WORKING WITH DATA*******************************************

  /*
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      // setTimeout(() => resolve(data[4]), 2000);
      setTimeout(() => {
        const productPorId = data.find((product) => product.id === Id);
        resolve(productPorId);
      }, 1000);
    });

    myPromise.then((response) => setProducto(response));
  }, [producto, Id]);


  */
  // console.log("el producto buscado es ", producto);

  //********************** TILL HERE ********************* */

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

  // if (!producto) return <p>... Un Momento, cargando stock</p>;

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
