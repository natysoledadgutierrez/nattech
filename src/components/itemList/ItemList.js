import Item from '../item/Item';

const ItemList = ({ items }) => {
    return (
        <>
        {
            items?.length > 0
            ? items.map(item => <Item id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} stock={item.stock}/>)
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemList;