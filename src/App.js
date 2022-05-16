import './App.css';
import Navbar from './components/Navbar';


const App = () => {
  let coder = "Adelante!";
  return (
    <div className="App">
      <Navbar />
      <h1>Mi primera aplicación en ReactJs. {coder} </h1>
    </div>
  );
}

export default App;
