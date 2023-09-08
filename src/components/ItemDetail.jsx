import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, categoria, imagen, precio }) => {
  return (
    <div className="flex items-center rounded-lg border-solid border-2 w-2/5 ">
      <div className="w-2/4">
        <img className="h-1/5 overflow-hidden" src={imagen} alt="Imagen de " />
      </div>
      <div className="flex flex-col items-center p-2 text-center mx-auto">
        <p className="text-5xl my-1 text-blue-500"> {nombre}</p>
        <p className="text-xl my-1">Precio : {precio}</p>
        <p className="text-xl my-1">Categoría: {categoria}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
