import React from "react";

const Item = ({ producto, imagen }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border-solid border-2 p-3">
      <p className="text-2xl">{producto}</p>
      <img className="w-4/5" src={imagen} alt="Imagen de " />
    </div>
  );
};

export default Item;
