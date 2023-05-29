import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { productosData } from './ProductsData'
import '../styles/ordenes.css'
const Ordenes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const arrayData = location.state?.arrayData || [];

    const ingresarCorreo = ()=>{
        navigate('/correo')
    }
    return (
        <div>
            <div className='my-order'>
                <div className='my-order-container'>
                    <h1 className="title">Mis Ordenes</h1>
                    <div className="my-order-content">
                        {
                            arrayData.length === 0 ? 
                            (<p>Aun no tienes productos agregados</p>):
                            (
                                arrayData.map(producto => (
                                    <div className="order" key={producto.ID}>
                                        <p>
                                            <span>{producto.nombre}</span>
                                            <span>{producto.cantidad}</span>
                                        </p>
                                        <p>{(producto.precio*producto.cantidad)}</p>
                                        <img src="assets/icons/flechita.svg" alt="arrow" />
                                    </div>
                                )))
                        }
                    </div>
                    <button className="primary-button add-to-cart-button" onClick={ingresarCorreo}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Ordenes