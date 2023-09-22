import data from "../data/data.json";
import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { Id } = useParams();

  // console.log("el id en params buscado es ", Id);

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

  // console.log("el producto buscado es ", producto);

  if (!producto) return <p>... Un Momento, cargando stock</p>;

  return (
    <div className="flex flex-col items-center">
      <ItemDetail
        name={producto.name}
        category={producto.category}
        image={producto.image}
        price={producto.price}
        stock={producto.stock}
      />
    </div>
  );
};

export default ItemDetailContainer;
