import  './Item.css';
import { Link } from 'react-router-dom';
import FormatNumber from '../utils/FormatNumber';

const Item = ({ id, nombre, stock, precio, imagen }) => {
    return (
        <div className="card producto">
            <div className="badge bg-dark text-white position-absolute">
                {stock > 0 ? 'Hay stock' : 'Sin Stock'}
            </div>
            <img src={require("../images/" + imagen)} className="card-img-top producto-zoom" alt={nombre}/>
            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <div className="precios"> {FormatNumber(precio)}</div>
                <Link to={`/item/${id}`}>
                    <button className="btn btn-primary">Agregar al carrito</button>
                </Link>
            </div>
        </div>
        
    );
}

export default Item;
