import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const estado = useContext(CartContext);

    return (
        <>
           { 
            estado.cartList.length === 0 
            ? 
                <p>El carrito esta vacio</p>
            : 
                estado.cartList.map((item) => 
               
                <div className="card producto">
                    <img src={require("../images/" + item.imagen)} className="card-img-top producto-zoom" alt={item.nombre}/>
                    <div className="card-body">
                        <p className="card-text">${item.nombre}</p>
                            <div className="precios"> ${item.precio} x {item.cuotas}</div>
                            <div className="precios">Cantidad {item.cantidad}</div>
                        <button className="btn btn-primary" onClick={() => estado.removeItem(item.id)}>Quitar</button>
                    </div>
                </div>
                )
           }
        </>
    );
}

export default Cart;