import React, { useRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/correoInsert.css'
import { useNavigate } from 'react-router-dom';

const CorreoInsert = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("");

  const location = useLocation();
  const arrayData = location.state?.arrayData || [];
  const Total = location.state?.total || 0;
  const navigate = useNavigate();
  const [estados, setEstados] = useState([]);

  const form = useRef()

  const enviado = () => {
    navigate('/enviado');
  }
  useEffect(() => {
    fetch('http://localhost:3001/estados')
      .then(response => response.json())
      .then(data => {
        setEstados(data)
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener las estados:', error);
      });

  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    if (nombre === "" || apellido === "" || email === "" || estado === "") {
      alert("Por favor, complete todos los campos requeridos.");
      return false;
    } else {

      emailjs.sendForm('service_q19nlbe', 'template_ssrt9rw', form.current, 'qwcyT7lTmIsVr3VTP')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
      enviado()
      arrayData.forEach(producto => {
        const productoId = producto.id_producto;
        const cantidad = producto.cantidad;

        fetch(`http://localhost:3001/productos/${productoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cantidad: cantidad })
        })
          .then(response => response.json())
          .then(data => {
            console.log(data.message);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      })
    }

  };


  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous"></link>
      <div className="login">
        <div className="form-container">
          <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" className='form-control' placeholder='Nombre' name='user_name' onChange={(e) => setNombre(e.target.value)} required /><br />
            <input type="text" className='form-control' placeholder='Apellido Paterno' name='appellido' onChange={(e) => setApellido(e.target.value)} required /><br />
            <input type="email" id="email" name='user_email' placeholder="nombre@example.com" className="form-control nput input-email" onChange={(e) => setEmail(e.target.value)} required />
            <select name="state" className='Estados' onChange={(e) => setEstado(e.target.value)} required>
              <option >Seleccione un estado</option>
              {estados.map((estado) => {
                return (
                  <option key={estado.id_estado} value={estado.nombre_estado}>{estado.nombre_estado}</option>
                )
              })}

            </select>

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