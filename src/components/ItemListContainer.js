import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
    <div>
        <div className="ItemListContainer"> {props.greeting} </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
    );

}

export default ItemListContainer;