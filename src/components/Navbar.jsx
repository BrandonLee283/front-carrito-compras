import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Carrito from "./Carrito";
// import MenuDesktop from "./Menudesktop";
import { useState } from 'react';
import { useEffect } from 'react';
import { productosSelec } from './ProdcutosSelccionados';
const Navbar = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/categorias')
        .then((response) => response.json())
        .then((data) => setCategorias(data))
        .catch((error) => console.error('Error al obtener los usuarios:', error));
    }, []);

    const [showCart, setShowCart] = useState(false);
    // const [showCuenta, setShowCuenta] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
        // setShowCuenta(false);
    };

    // const toggleCuenta = () => {
    //     setShowCuenta(!showCuenta);
    //     setShowCart(false);
    // };


    return (
        <nav>
            <img src="assets/icons/icon_menu.svg" alt="" className="menu" />
            <div className="navbar-left">
                <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <ul>
                    <li><NavLink to={`/`}>Todo</NavLink></li>
                    {categorias.map((categoria)=>(
                        <li key={categoria.id_categoria}><NavLink to={`/productos/${categoria.id_categoria}`}>{categoria.nombre_categoria}</NavLink></li>
                    ))}
{/*                     
                    <li><NavLink to={`/productos/Portatiles`}>Portatiles</NavLink></li>
                    <li><NavLink to={`/productos/Pantallas`}>Pantallas</NavLink></li>
                    <li><NavLink to={`/productos/Audifonos`}>Audifonos</NavLink></li>
                    <li><NavLink to={`/productos/Camaras`}>Camaras</NavLink></li> */}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    {/* <li className="navbar-email" onClick={toggleCuenta}>reyes@axample.com</li>
                    {showCuenta ? <MenuDesktop /> : null} */}
                    <li className="navbar-shopping-cart" onClick={toggleCart}>

                        <img src="assets/icons/icon_shopping_cart.svg" alt="shopping-cart" />
                        {/* <div className='NoProductos'>0</div> */}

                    </li>
                    {showCart ? <Carrito selectedItems={productosSelec} /> : null}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar