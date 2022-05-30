import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    
    let cuota = item.precio / item.cuotas;
    
    return (
        <>
        {
            item.imagen ? 
                <section>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card text-black">
                            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                            <img src={require("../images/" + item.imagen)}
                                className="card-img-top" alt="Apple Computer" />
                            <div className="card-body">
                                <div className="text-center">
                                <h5 className="card-title">{item.nombre}</h5>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Precio</span><span>${item.precio}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>{item.interes == 0 ? "Cuotas sin interés" : ""}</span>
                                    <span>{item.cuotas} x ${((cuota * item.interes) / 100) + cuota}</span>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <ItemCount stock={3} initial={1} onAdd={onAdd}/>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;