import './ItemListContainer.css';
import ItemList from './ItemList';
import CustomFetch from '../utils/CustomFetch'
import { useEffect, useState } from 'react';
const { productos } = require('../utils/Productos');

const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        CustomFetch(2000, productos)
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