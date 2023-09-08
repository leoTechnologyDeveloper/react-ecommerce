function Button({ textButton, handleclick, isClicker }) {
  return (
    <button
      onClick={handleclick}
      className={
        isClicker ? "bg-blue-500 text-white px-2 text-2xl" : "bg-blue-100 p-2"
      }
    >
      {textButton}
    </button>
  );
}

export default Button;
