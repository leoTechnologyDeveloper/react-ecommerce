import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col m-auto content-center">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Hello from ItemListContainer" />}
          />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer title="Hello from ItemListContainer" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
