import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "./logo.jpg";
import data from "../data/data.json";

const categoriasCompletas = data.map((item) => item.category);

const categoriasUnicas = new Set(categoriasCompletas);

const NavBar = () => {
  return (
    <div className="flex  bg-blue-800 p-3 justify-between content-center text-white">
      <NavLink to={"/"}>
        <img src={logo} alt="imagen logo" className="w-20 rounded-xl" />
      </NavLink>

      <nav className="flex flex-wrap flex-row gap-5 text-lg">
        <button>
          <NavLink to={"/"}>home</NavLink>
        </button>

        {[...categoriasUnicas].map((item) => {
          return (
            <button key={item}>
              <NavLink to={`/categoria/${item}`}>{item}</NavLink>
            </button>
          );
        })}
        <NavLink to={`/cart`}>
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
