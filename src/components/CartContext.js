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
    };

    const removeItem = (id) => {
        cartList.forEach(item => { if(item.id == id) item.cantidad = undefined; });
        let listaSinItem = cartList.filter(item => {return item.id != id});
        setCartList(listaSinItem);
    }
    
    const clearCart = () => {
        setCartList([]);
    }

    const calcTotalItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].cantidad;
    }

    const calcTotal = () => {
        let totalItem = cartList.map(item => calcTotalItem(item.id));
        return totalItem.reduce(((previous, currentValue) => previous + currentValue));
    }
    const calcItemsCantidad = () => {
        let cantidades = cartList.map(item =>item.cantidad);
        return cantidades.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeItem, 
            clearCart,
            calcTotalItem,
            calcTotal,
            calcItemsCantidad
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;