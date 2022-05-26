import  './Item.css';


const Item = ({ id, nombre, stock, precio, imagen }) => {
    return (
        <div className="card producto">
            <div className="badge bg-dark text-white position-absolute">
                {stock > 0 ? 'Hay stock' : 'Sin Stock'}
            </div>
            <img src={require("../images/" + imagen)} className="card-img-top producto-zoom" alt={nombre}/>
            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <div className="precios"> $ {precio}</div>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        
    );
}

export default Item;
