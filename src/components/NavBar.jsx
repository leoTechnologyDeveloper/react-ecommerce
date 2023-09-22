import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "./logo.jpg";
import data from "../data/data.json";

const categoriasCompletas = data.map((item) => item.category);

const categoriasUnicas = new Set(categoriasCompletas);

// console.log("las categorias unicas son ", categoriasUnicas);

const NavBar = () => {
  return (
    <div className="flex  bg-blue-800 p-3 justify-between content-center text-white">
      <NavLink to={"/"}>
        <img src={logo} alt="imagen logo" className="w-20 rounded-xl" />
      </NavLink>
      {/* <a href="/">
        <img src={logo} alt="imagen logo" className="w-20 rounded-xl" />
      </a> */}

      <nav className="flex flex-wrap flex-row gap-5 text-lg">
        <button>
          <NavLink to={"/"}>home</NavLink>
          {/* <a href="/">Inicio</a> */}
        </button>

        {[...categoriasUnicas].map((item) => {
          return (
            <button key={item}>
              <NavLink to={`/categoria/${item}`}>{item}</NavLink>
              {/* <a href="/categoria/bebidas">Bebidas</a> */}
            </button>
          );
        })}

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
