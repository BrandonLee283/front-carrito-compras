import React from 'react'
import '../styles/bienvenida.css'
import { useNavigate } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'
const Bienvenida = () => {
    const navigate = useNavigate()
    const cerrar = ()=>{
        navigate('/')
    }
    return (
        <div>
            <NavbarAdmin></NavbarAdmin>
            <div className="welcome">
                <div className="form-container">
                    <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                        <h1 className="title">Bienvenido a nuestro sitio para administradores de nuestra tienda</h1>
                        <p className="subtitle">Aqui podras actualizar, eliminar y editar todo sobre la tienda</p>
                        <div className="email-image">
                            <img src="assets/bienvenido.png" alt="bienvenido" className="email"/>
                        </div>
                        <button onClick={cerrar} className="primary-button login-button">
                            Cerrar Sesion
                        </button>
                        <p className="resend">
                            <span>Desea Cerrar Sesion ?</span>
                            <a href="/" onClick={cerrar} > Clic here</a>
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Bienvenida