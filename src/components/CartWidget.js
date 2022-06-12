import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext'
import { useContext } from 'react';

const CartWidget = () => {
    const context = useContext(CartContext);

    return (
        <Badge badgeContent={context.calcItemsCantidad()} badgecolor="secondary"> 
            <ShoppingCartIcon color="success"/>
        </Badge>
    )
}

export default CartWidget;