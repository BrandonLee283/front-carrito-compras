import '../styles/carrito.css';
import { useNavigate } from 'react-router-dom';

const Carrito = ({ selectedItems }) => {
    const navigate = useNavigate();
    var sumaTotal = 0
    const ordenes = (event) => {
        event.preventDefault();
        navigate('/ordenes', { state: { arrayData: selectedItems } });
    };
    const extensiones = '.png' || '.jpg';
    return (
        <div>
            <aside className="product-detail desaparecer">
                <div className="title-container">
                    <img src="assets/icons/flechita.svg" alt="arrow" />
                    <p className="title">My Order</p>
                </div>
                <div className="my-order-content">
                    {selectedItems.length === 0?(
                    <p>No hay articulos</p>):
                    (selectedItems.map(producto => {
                        sumaTotal += (producto.precio_producto * producto.cantidad)
                        return (
                            <div className="shopping-cart" key={producto.id_producto}>
                                <figure>
                                    <img src={`AssetsProducts/${producto.imagen_prodcuto+extensiones}`} alt="Mando" className="product-img" />
                                </figure>
                                <p>{producto.nombre_producto}</p>
                                <p>${producto.precio_producto}</p>
                                <p>cantidad: {producto.cantidad}</p>
                                <img src="assets/icons/icon_close.png" alt="close" />
                            </div>
                        );
                    })
                )}
                    <div className="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>{sumaTotal}</p>
                    </div>
                    <button className="primary-button add-to-cart-button" onClick={ordenes}>
                        Checkout
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Carrito;
