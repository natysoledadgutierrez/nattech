import "./Navbar.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="../index.html">
                        <img
                            src={logo}
                            alt="Haz clic aquí para volver a la página de inicio"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">
                                    Oferta
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/category/3" className="nav-link" aria-current="page">
                                            Auricular
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Disco externo
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Fuente
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Gabinete
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Monitor
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Mouse
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Pendrive
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Teclado
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">
                                    Galería
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            ></input>
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                        <CartWidget />
                    </div>
                </div>
            </nav>
            
        </div>
    );
   
};


export default Navbar;
