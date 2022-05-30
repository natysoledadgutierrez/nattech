import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  let coder = "Adelante!";
  return (
    <div className="App">
      <Navbar />
      <h1>Mi primera aplicación en ReactJs. {coder} </h1>
      {/* <ItemListContainer greeting='HOLA MUNDO!!!'/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
