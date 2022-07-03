import { useContext } from 'react';
import { CartContext } from '../cartContext/CartContext';
import FormatNumber from '../../utils/FormatNumber';
import Table from 'react-bootstrap/Table';
import {serverTimestamp, setDoc, doc, collection} from "firebase/firestore";
import db from '../../utils/FirebaseConfig';

function Cart() {
    const estado = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                email: "natysg@.com",
                name: "Natalia",
                phone: "12340000"
            },
            date: serverTimestamp(),
            total: FormatNumber(estado.calcTotal()),
            items: estado.cartList
        };
        console.log(order);
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };
        createOrderInFirestore()
            .then(result => alert('Your ID Order is ' + result.id))
            .catch(err => console.log(err));

        estado.clearCart();
    };

    return (
        <>
            {estado.cartList.length === 0
                ?
                <p>El carrito esta vacio</p>
                :
                estado.cartList.map((item) => <div className="card producto">
                    <img src={require("../../images/" + item.imagen)} className="card-img-top producto-zoom" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                        <div className="precios"> {FormatNumber(item.precio)}{item.cuotas !== 0 && ' x ' + item.cuotas}</div>
                        <div className="precios">Cantidad {item.cantidad}</div>
                        <div className="precios">Subtotal {FormatNumber(item.cantidad * item.precio)}</div>
                        <button className="btn btn-primary" onClick={() => estado.removeItem(item.id)}>Quitar</button>
                    </div>
                </div>
                )}

            {estado.cartList.length !== 0 &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan={2}>Datos de compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cantidad de productos</td>
                            <td>{estado.calcItemsCantidad()}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{FormatNumber(estado.calcTotal())}</td>
                        </tr>
                    </tbody>
                    <button className="btn btn-secondary" onClick={createOrder}>CHECKOUT NOW</button>
                </Table>}
        </>
    );
}

export default Cart;