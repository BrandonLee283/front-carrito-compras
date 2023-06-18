import React from 'react'
import '../styles/email.css'
import { useNavigate } from 'react-router-dom'
const EmailEnviado = () => {
    const navigate = useNavigate();
    const regresarRaiz=()=>{
        navigate('/productos')
      }
    return (
        <div>
            <div className="login ">
                <div className="form-container">
                    <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                        <h1 className="title">¡E-mail ha sido enviado!</h1>
                        <p className="subtitle">Consulte su bandeja de entrada</p>

                        <div className="email-image">
                            <img src="./assets/icons/email.svg" alt="email" className="email"/>
                        </div>
                        <button className="primary-button login-button" onClick={regresarRaiz}>
                            Inicio
                        </button>
                        {/* <p className="resend">
                            <span>Didn´t recive the email</span>
                            <a href="#">Resend</a>
                        </p> */}
                </div>
            </div>
        </div>
    )
}

export default EmailEnviado