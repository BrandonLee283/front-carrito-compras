import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Carrito from "./Carrito";
import MenuDesktop from "./Menudesktop";
import { useState } from 'react';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const [showCuenta, setShowCuenta] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
        setShowCuenta(false);
    };

    const toggleCuenta = () => {
        setShowCuenta(!showCuenta);
        setShowCart(false);
    };

    return (
        <nav>
            <img src="assets/icons/icon_menu.svg" alt="" className="menu" />
            <div className="navbar-left">
                <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <ul>
                    <li><NavLink to={`/`}>Todo</NavLink></li>
                    <li><NavLink to={`/productos/Telefonia`}>Telefonia</NavLink></li>
                    <li><NavLink to={`/productos/Portatiles`}>Portatiles</NavLink></li>
                    <li><NavLink to={`/productos/Pantallas`}>Pantallas</NavLink></li>
                    <li><NavLink to={`/productos/Audifonos`}>Audifonos</NavLink></li>
                    <li><NavLink to={`/productos/Camaras`}>Camaras</NavLink></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={toggleCuenta}>reyes@axample.com</li>
                    {showCuenta ? <MenuDesktop /> : null}
                    <li className="navbar-shopping-cart" onClick={toggleCart}>

                        <img src="assets/icons/icon_shopping_cart.svg" alt="shopping-cart" />
                        <div className='NoProductos'>0</div>

                    </li>
                    {showCart ? <Carrito selectedItems={[]} /> : null}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar