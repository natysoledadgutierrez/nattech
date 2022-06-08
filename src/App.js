import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';


const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;