import { Link } from "react-router-dom";

const Item = ({ id, name, image, category }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border-solid border-2  w-1/5 ">
      <p className="text-2xl my-1 ">{name}</p>
      <p className="text-2xl my-1 bg-blue-100 rounded-full px-4">{category}</p>
      <img className="w-full object-cover h-3/5" src={image} alt="Imagen de " />
      <Link to={`/item/${id}`}>
        <button
          className="text-2xl px-3 py-1 bg-gray-800 hover:bg-yellow-500 text-yellow-200 hover:text-gray-900 rounded m-1"
          type="button"
        >
          ver mas
        </button>
      </Link>
    </div>
  );
};

export default Item;
