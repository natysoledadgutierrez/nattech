import './ItemListContainer.css';

const ItemListContainer = (props) => {

return (
    <div>
    <div className="itemListContainer"> {props.greeting} </div>
    </div>
    );

}

export default ItemListContainer;