import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, categoria }) => {
  const id2 = "007";
  console.log("My id2 es ", id2);
  console.log("El id que llega es ", id);
  return (
    <div className="flex flex-col items-center rounded-lg border-solid border-2 p-1 w-1/5">
      <p className="text-2xl my-1 ">{nombre}</p>
      <p className="text-2xl my-1 bg-blue-100 rounded-full px-4">{categoria}</p>
      <img className="w-5/6 h-3/4" src={imagen} alt="Imagen de " />
      <Link to={`/item/${id}`}>
        <button
          className="text-2xl px-3 py-1 bg-gray-800 hover:bg-yellow-500 text-yellow-200 hover:text-gray-900 rounded m-2"
          type="button"
        >
          ver mas
        </button>
      </Link>
    </div>
  );
};

export default Item;
