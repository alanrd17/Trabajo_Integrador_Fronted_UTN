import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <h2>Logotipo</h2>
            <nav>
                <NavLink to={"/Contact"}>contacto</NavLink>
                <NavLink to={"/Home"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
            </nav>
        </header>
)
}

export default Navbar