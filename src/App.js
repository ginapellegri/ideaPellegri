import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer list="item 1.1"/>
    </div>
  );
}

export default App;
