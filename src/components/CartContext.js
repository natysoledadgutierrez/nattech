import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (item, cantidad) => {
        let itemExistente = cartList.find(cart => cart.id === item.id);
        item.cantidad = item.cantidad == undefined ? cantidad : item.cantidad + cantidad;
        if (itemExistente == undefined) {
            setCartList([
                ...cartList,
                item
            ]);
        }
    }
    const removeItem = (id) => {
        cartList.forEach(item => { if(item.id == id) item.cantidad = undefined; });
        let listaSinItem = cartList.filter(item => {return item.id != id});
        setCartList(listaSinItem);
    }
    const clearCart = () => {
        setCartList([]);
    }
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;