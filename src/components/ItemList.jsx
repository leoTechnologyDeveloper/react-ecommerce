import Item from "../components/Item";
// import ItemDetail from "./ItemDetail";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap gap-4 w-4/5 m-5 h-2/5 ">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.product}
          categoria={producto.categoria}
          imagen={producto.imagen}
        />

        // <ItemDetail
        //   key={producto.id}
        //   nombre={producto.product}
        //   categoria={producto.categoria}
        //   precio={producto.price}
        //   imagen={producto.imagen}
        // />
      ))}
    </div>
  );
};

export default ItemList;
