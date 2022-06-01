import './ItemListContainer.css';
import ItemList from './ItemList';
import CustomFetch from '../utils/CustomFetch'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { productos } = require('../utils/Productos');

const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    let productosMostrar = id === undefined ? productos : productos.filter(item => item.categoria === parseInt(id));

    useEffect(() => {
        CustomFetch(2000, productosMostrar)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return (
            <div>
                <div className="ItemListContainer"> {props.greeting} </div>
                <ItemList items={datos} /> 
            </div>
        );
}

export default ItemListContainer;