import CartWidget from "./CartWidget";
import logo from "./logo.jpg";

const NavBar = () => {
  return (
    <div className="flex  bg-blue-800 p-3 justify-between content-center text-white">
      <img src={logo} alt="imagen logo" className="w-20 rounded-xl" />
      <nav className="flex flex-wrap flex-row gap-5 text-lg">
        <button>
          <a href="/">Inicio</a>
        </button>
        <button>
          <a href="/categoria/bebidas">Bebidas</a>
        </button>
        <button>
          <a href="/categoria/postres">Postres</a>
        </button>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
