import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreFetchOne } from "../utils/FirestoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        FirestoreFetchOne(id)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [id]);

    return (
                <ItemDetail item={dato} /> 
        );
}

export default ItemDetailContainer;