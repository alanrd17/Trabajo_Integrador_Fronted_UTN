import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
return (
    <header>
    <nav>
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    </header>
)
}

export default Header