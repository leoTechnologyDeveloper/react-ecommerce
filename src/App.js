import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App flex flex-col m-auto content-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:Id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<ErrorPage title="No existe este recurso" />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
