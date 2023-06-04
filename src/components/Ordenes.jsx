import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { productosData } from './ProductsData'
import '../styles/ordenes.css'
const Ordenes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const arrayData = location.state?.arrayData || [];
    var sumaTotal = 0
    const ingresarCorreo = () => {
        arrayData.map(producto => {
            const productoId = producto.id_producto; // ID del producto a actualizar
            const cantidad = producto.cantidad; // Cantidad a restar del stock

            fetch(`http://localhost:3001/productos/${productoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cantidad: cantidad })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message); // Mensaje de respuesta del servidor
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        navigate('/correo', { state: { arrayData: arrayData, total: sumaTotal } })
    }

    return (
        <div>
            <div className='my-order'>
                <div className='my-order-container'>
                    <h1 className="title">Mis Ordenes</h1>
                    <div className="my-order-content">
                        {
                            arrayData.length === 0 ?
                                (<p>Aun no tienes productos agregados</p>) :
                                (
                                    arrayData.map(producto => {
                                        sumaTotal += (producto.precio_producto * producto.cantidad)
                                        return (
                                            <div className="order" key={producto.id_producto}>
                                                <p>
                                                    <span>{producto.nombre_producto}</span>
                                                    <span>{producto.cantidad}</span>
                                                </p>
                                                <p>{(producto.precio_producto * producto.cantidad)}</p>
                                                <img src="assets/icons/flechita.svg" alt="arrow" />
                                            </div>
                                        )

                                    }))
                        }
                        {/* <p>{sumaTotal}</p> */}
                    </div>
                    <button className="primary-button add-to-cart-button" onClick={ingresarCorreo}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Ordenes