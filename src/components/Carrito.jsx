import '../styles/carrito.css';
import { useNavigate } from 'react-router-dom';
const Carrito = ({ selectedItems, setSelectedItem }) => {
    const navigate = useNavigate();
    var sumaTotal = 0
    const ordenes = (event) => {
        event.preventDefault();
        navigate('/ordenes', { state: { arrayData: selectedItems } });
    };
    const quitarProducto = (producto) => {
        const existingItem = selectedItems.find((item) => item.id_producto === producto.id_producto);

        if (existingItem.cantidad > 1) {
            const updatedItems = selectedItems.map((item) => {
                if (item.id_producto === producto.id_producto) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return item;
            });
            setSelectedItem(updatedItems);
        } else {
            const updatedItems = selectedItems.filter((item) => item.id_producto !== producto.id_producto);
            setSelectedItem(updatedItems);

        }
    }
    const extensiones = '.png' || '.jpg';
    return (
        <div>
            <aside className="product-detail desaparecer">
                <div className="title-container">
                    <img src="assets/icons/flechita.svg" alt="arrow" />
                    <p className="title">My Order</p>
                </div>
                <div className="my-order-content">
                    {selectedItems.length === 0 ? (
                        <p>No hay articulos</p>) :
                        (selectedItems.map(producto => {
                            sumaTotal += (producto.precio_producto * producto.cantidad)
                            return (
                                <div className="shopping-cart" key={producto.id_producto}>
                                    <img src="assets/icons/icon_close.png" alt="close" onClick={() => quitarProducto(producto)} />

                                    <figure>
                                        <img src={`AssetsProducts/${producto.imagen_prodcuto + extensiones}`} alt="Mando" className="product-img" />
                                    </figure>
                                    <p>{producto.nombre_producto}</p>
                                    <p>${producto.precio_producto}</p>
                                    <p>cantidad: {producto.cantidad}</p>
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
