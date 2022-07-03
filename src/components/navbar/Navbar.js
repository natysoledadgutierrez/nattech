import "./Navbar.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import NavDropdown  from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link to="/">
                    <img src={logo} />
                </Link> 
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
                            <Link to="/" className="nav-link" aria-current="page">
                                    Oferta
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                            <NavDropdown title="Productos" menuVariant="dark">
                                <Link to="/category/1" className="dropdown-item">
                                    Monitores
                                </Link>
                                <Link to="/category/2"  className="dropdown-item">
                                    Teclados
                                </Link>
                                <Link to="/category/3" className="dropdown-item">
                                    Auriculares
                                </Link>
                                <Link to="/category/4" className="dropdown-item">
                                    Mouses
                                </Link>
                                <Link to="/category/5" className="dropdown-item">
                                    Pendrives
                                </Link>
                                <Link to="/category/6" className="dropdown-item">
                                    Gabinetes
                                </Link>
                                <Link to="/category/7" className="dropdown-item">
                                    Fuentes
                                </Link>
                                <Link to="/category/8" className="dropdown-item">
                                    Discos externos
                                </Link>
                            </NavDropdown>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                    Galería
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                    Contacto
                                </Link>
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
                        <Link to='/cart'><CartWidget /></Link>
                    </div>
                </div>
            </nav>
            
        </div>
    );
   
};


export default Navbar;
