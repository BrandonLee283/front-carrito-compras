import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import Carrito from './Carrito';
import '../styles/correoInsert.css'
const CorreoInsert = () => {

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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      <div class="login">
        <div class="form-container">
            <img src="./assets/logos/logo_yard_sale.svg" alt="logo" class="logo"/>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="email" class="label">Ingrese un email Valido para mandar su nota de remision</label><br />
                    <input type="text" className='form-control' placeholder='nombre' name='user_name' required /><br />
                    <input type="email" id="email" name='user_email' placeholder="nombre@example.com" class="form-control nput input-email" required/>
                    <input type="text" className='form-control' placeholder='subject' name='subject' required /><br />
                    <textarea name="message" cols="40" rows="5" required></textarea>
                    <img src="./AssetsProducts/tv1.png" alt="television" name='television' />
                    <input type="submit" value="Enviar" class="primary-button login-button"/>
                    
                </form>
        </div>
    </div>  
    </>
  )
}

export default CorreoInsert;