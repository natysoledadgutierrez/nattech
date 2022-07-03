import  './ItemCount.css';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => { 

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <>
        <div className= "ProductAmountContainer">
            <Button variant="text" onClick={increment}><Add /></Button>
            <div className="ProductAmount">{count}</div>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
        </div>
        </>
    );  
}
export default ItemCount;