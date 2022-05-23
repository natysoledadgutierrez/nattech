import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


const App = () => {
  let coder = "Adelante!";
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='HOLA MUNDO!!!'/>
      <h1>Mi primera aplicación en ReactJs. {coder} </h1>
    </div>
  );
}

export default App;
