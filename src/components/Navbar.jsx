import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Carrito from "./Carrito";
// import MenuDesktop from "./Menudesktop";
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then((response) => response.json())
            .then((data) => setCategorias(data))
            .catch((error) => console.error('Error al obtener los usuarios:', error));
    }, []);

    const [showCart, setShowCart] = useState(false);

    const toggleCart = (e) => {
        console.log(showCart);
        let cambio = !showCart
        setShowCart(cambio);
        console.log(cambio);
    };
    return (
        <nav>
            <img src="assets/icons/icon_menu.svg" alt="" className="menu" />
            <div className="navbar-left">
                <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <ul>
                    <li><NavLink to={`/`}>Todo</NavLink></li>
                    {categorias.map((categoria) => (
                        <li key={categoria.id_categoria}><NavLink to={`/productos/${categoria.id_categoria}`}>{categoria.nombre_categoria}</NavLink></li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-shopping-cart" onClick={toggleCart}>
                        <img src="assets/icons/icon_shopping_cart.svg" alt="shopping-cart" />
                    </li>
                    {showCart ? <Carrito selectedItems={[]} setSelectedItem={[]}  /> : null}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar