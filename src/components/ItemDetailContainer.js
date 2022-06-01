import ItemDetail from './ItemDetail';
import CustomFetch from '../utils/CustomFetch'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { productos } = require('../utils/Productos');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        CustomFetch(100, productos.find(item => item.id === id))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [id]);

    return (
                <ItemDetail item={dato} /> 
        );
}

export default ItemDetailContainer;