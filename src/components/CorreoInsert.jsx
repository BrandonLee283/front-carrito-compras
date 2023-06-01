import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// import Carrito from './Carrito';
import '../styles/correoInsert.css'
const CorreoInsert = () => {

  const location = useLocation();
  const arrayData = location.state?.arrayData || [];
  const Total = location.state?.total || 0;


  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q19nlbe', 'template_ssrt9rw', form.current, 'qwcyT7lTmIsVr3VTP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous"></link>
      <div className="login">
        <div className="form-container">
          <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" className='form-control' placeholder='Nombre' name='user_name' required /><br />
            <input type="text" className='form-control' placeholder='Apellido Paterno' name='appellido' required /><br />
            <input type="email" id="email" name='user_email' placeholder="nombre@example.com" className="form-control nput input-email" required />
            <textarea
              name="message"
              cols="40"
              rows="5"
              value={arrayData.map((producto) => `${producto.cantidad} ${producto.nombre_producto} $${producto.precio_producto} c/u`).join("\n")}
              readOnly
              required />
            <input type="text" className='form-control' placeholder='subject' name='subject' value={`Total: $${Total}`} readOnly required /><br />
            <input type="submit" value="Enviar" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </>
  )
}

export default CorreoInsert;