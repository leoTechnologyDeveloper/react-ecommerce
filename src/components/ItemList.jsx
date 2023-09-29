import Item from "../components/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap gap-4 w-4/5 m-5 h-2/6  bg-cover justify-evenly">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          name={producto.name}
          category={producto.category}
          image={producto.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
