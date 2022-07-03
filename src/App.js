import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import CartContextProvider from './components/cartContext/CartContext';


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