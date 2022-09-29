import '../Header/Header.css';
import * as React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

// NAVBAR
function Navbar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <ul>
                    <li className="nav__sections">
                        <Link to="/">
                            <h2 className="nav__titles">Productos</h2>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="category/ganadores-de-peso" >Ganadores de Peso</Link></li>
                            <li><Link to="category/vitaminas-y-minerales">Vitaminas y minerales</Link></li>
                            <li><Link to="category/carbohidratos">Carbohidratos</Link></li>
                            <li><Link to="category/probioticos">Probioticos</Link></li>
                            <li><Link to="category/proteinas-vegetales">Proteinas Vegetales</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections">
                        <Link to="/">
                            <h2 className="nav__titles">Que producto me sirve?</h2>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="type/masa-muscular">Masa muscular</Link></li>
                            <li><Link to="type/nutricion-diaria">Nutricion diaria</Link></li>
                            <li><Link to="type/recuperacion-muscular">Recuperacion muscular</Link></li>
                            <li><Link to="type/perdida-de-grasa">Perdida de grasa</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections"><Link to="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Envíos</h2></Link></li>
                    <li className="nav__sections"><Link to="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Ubicación</h2></Link></li>
                    <li className="nav__sections"><Link to="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Sobre nosotros</h2></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;