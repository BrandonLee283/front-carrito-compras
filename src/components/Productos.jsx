// Componente Productos
import React, { useEffect } from 'react';
import '../styles/productos.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { productosData } from './ProductsData';
import Carrito from "./Carrito";

const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/productos')
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error al obtener los usuarios:', error));
    }, []);

    const { categoria } = useParams();
    const [showCart, setShowCart] = useState(false);
    const [selectedItems, setSelectedItem] = useState([]);


    const agregarCarrito = (producto) => {
        const existingItem = selectedItems.find((item) => item.ID === producto.ID);
        setShowCart(true);
        if (existingItem) {
            const updatedItems = selectedItems.map((item) => {
                if (item.ID === producto.ID) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            setSelectedItem(updatedItems);
        } else {
            const newItem = { ...producto, cantidad: 1 };
            setSelectedItem([...selectedItems, newItem]);
        }
    };
    console.log(productos);
    const productosFiltrados = categoria
        ? productos.filter((producto) => producto.categoria === categoria)
        : productos;

    return (
        <div>
            <section className="main-container">
                <div className="cards-container">
                    {productosFiltrados.map((producto) => (
                        <div className="product-card" key={producto.id_producto}>
                            <img src={`AssetsProducts/${producto.imagen_prodcuto}.png`} alt="" className="product-img" />
                            <div className="product-info">
                                <div>
                                    <p>{producto.nombre_producto}</p>
                                    <p>${producto.precio_producto}</p>
                                </div>
                                <figure onClick={() => agregarCarrito(producto)}>
                                    <img src="./assets/icons/bt_add_to_cart.svg" alt="" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {showCart && <Carrito selectedItems={selectedItems} />}
        </div>
    );
};

export default Productos;
