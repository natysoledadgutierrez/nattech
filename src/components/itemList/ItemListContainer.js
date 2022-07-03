import './ItemListContainer.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreFetch } from "../../utils/FirestoreFetch";


const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        FirestoreFetch(parseInt(id))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos, id]);

    return (
            <div>
                <ItemList items={datos} /> 
            </div>
        );
}

export default ItemListContainer;