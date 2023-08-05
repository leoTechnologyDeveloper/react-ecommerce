import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App flex flex-col m-auto content-center">
      <NavBar />
      <ItemListContainer title="Hello from ItemListContainer" />
    </div>
  );
}

export default App;
