import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
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

          {/* <ItemDetailContainer title="tit del itemdetailcontainer" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
