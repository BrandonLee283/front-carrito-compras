// Componente Productos
import React, { useEffect } from 'react';
import '../styles/productos.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosSelec } from './ProdcutosSelccionados';
import Carrito from "./Carrito";

const Productos = () => {

    const { categoria } = useParams();
    const [showCart, setShowCart] = useState(false);
    const [selectedItems, setSelectedItem] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/productos')
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error('Error al obtener los usuarios:', error));
    }, []);


    const agregarCarrito = (producto) => {
        const existingItem = selectedItems.find((item) => item.id_producto === producto.id_producto);
        setShowCart(true);
        if (existingItem) {
            const updatedItems = selectedItems.map((item) => {
                if (item.id_producto === producto.id_producto) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            setSelectedItem(updatedItems);
        } else {
            const newItem = { ...producto, cantidad: 1 };
            setSelectedItem([...selectedItems, newItem]);
            productosSelec.push(producto)
        }
    };

    const productosFiltrados = categoria
        ? productos.filter(producto => producto.id_categoria === Number(categoria))
        : productos;

    const extensiones = '.png' || '.jpg';
    return (
        <div>
            <section className="main-container">
                <div className="cards-container">
                    {productosFiltrados.map((producto) => {
                        return producto.stock_producto > 0 ?(
                            <div className="product-card" key={producto.id_producto}>
                                <img src={`AssetsProducts/${producto.imagen_prodcuto + extensiones}`} alt="" className="product-img" />
                                <div className="product-info">
                                    <div>
                                        <p>{producto.nombre_producto}</p>
                                        <p>${producto.precio_producto}</p>
                                        <p style={{ color: producto.stock_producto > 80 ? 'blue' : producto.stock_producto > 10 ? '#ACD982' : 'red' }}>Disponibles: {producto.stock_producto}</p>
                                    </div>
                                    <figure onClick={() => agregarCarrito(producto)}>
                                        <img src="./assets/icons/bt_add_to_cart.svg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        ):(null)
                    })}
                </div>
            </section>
            {showCart && <Carrito selectedItems={selectedItems} setSelectedItem={setSelectedItem} />}
        </div>
    );
};

export default Productos;
