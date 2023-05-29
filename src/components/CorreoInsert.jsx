import React from 'react'
import '../styles/correoInsert.css'
const CorreoInsert = () => {
  return (
    <>
      <div class="login">
        <div class="form-container">
            <img src="./assets/logos/logo_yard_sale.svg" alt="logo" class="logo"/>
                <label for="email" class="label">Ingrese un email Valido para mandar su nota de remision</label>
                <input type="text" id="email" placeholder="nombre@example.com" class="input input-email"/>
                <input type="submit" value="Enviar" class="primary-button login-button"/>
        </div>
    </div>  
    </>
  )
}

export default CorreoInsert;