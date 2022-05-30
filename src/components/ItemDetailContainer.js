import ItemDetail from './ItemDetail';
import CustomFetch from '../utils/CustomFetch'
import { useEffect, useState } from 'react';
const { productos } = require('../utils/Productos');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);

    useEffect(() => {
        CustomFetch(2000, productos[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
                <ItemDetail item={dato} /> 
        );
}

export default ItemDetailContainer;