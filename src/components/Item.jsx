import { Link } from "react-router-dom";

const Item = ({ id, name, image, category }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border-solid border-2  w-1/5  bg-black text-white">
      <p className="text-2xl my-1 ">{name}</p>
      <p className="text-2xl my-1 bg-blue-800 rounded-full px-4">{category}</p>
      <img className=" object-cover h-full mt-3" src={image} alt="Imagen de " />
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
