import './ItemListContainer.css';
import ItemCount from './ItemCount';
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


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
            <div>
                <div className="ItemListContainer"> {props.greeting} </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                <ItemList items={datos} /> 
            </div>
        );
}

export default ItemListContainer;