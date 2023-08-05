import carrito from "./carrito-de-compras.png"

const CartWidget = () => {
  return (
    <div className='self-center flex gap-2 bg-blue-500 p-2 rounded-xl'>
        <img src={carrito} alt="imagen carrito" className="w-10" />
        <p>5</p>
    </div>
  )
}

export default CartWidget