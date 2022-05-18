import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  let coder = "Adelante!";
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <h1>Mi primera aplicación en ReactJs. {coder} </h1>
    </div>
  );
}

export default App;
