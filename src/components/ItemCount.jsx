import Button from "../components/Button";
import Number from "../components/Number";
import { useState } from "react";

const ItemCount = ({ onAdd, stock }) => {
  const [numClicks, setnumClicks] = useState(1);

  const incrementar = () => {
    numClicks < stock
      ? setnumClicks(numClicks + 1)
      : alert("paila ya llego al límite");
  };

  const reiniciar = () => {
    setnumClicks(0);
  };

  const decrementar = () => {
    numClicks > 1
      ? setnumClicks(numClicks - 1)
      : alert("ya no puedes disminuir mas");
  };

  return (
    <div className="flex flex-col items-center  bg-gray-300 my-3 py-3">
      <h1>Cantidad </h1>
      <Number numberClicks={numClicks} />
      <div className="buttonsContainer">
        <Button textButton="+" handleclick={incrementar} isClicker={true} />
        <Button
          textButton="Reiniciar"
          handleclick={reiniciar}
          isClicker={false}
        />
        <Button textButton="-" handleclick={decrementar} isClicker={true} />
      </div>
      <button
        className="m-5 bg-white rounded-full p-3 "
        onClick={() => onAdd(numClicks)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
