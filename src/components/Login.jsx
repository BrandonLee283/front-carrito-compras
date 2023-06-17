import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function LoginComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(response => response.json())
      .then(data => {
        setDatos(data[0])
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, [])

  const compararDatos = () => {
    let encontrado = false;

    datos.forEach((dato) => {
      if (encontrado) {
        return;
      }
      if (dato.user_cuenta === username && dato.password_cuenta) {
        console.log('Welcome');
        encontrado = true;
        if (dato.nombre_rol === 'Cliente') {
          navigate('/productos')
        }else{
          navigate('/navbarAdmin')
        }
      } else {
        console.log('Contraseña y/o usuario incorrectos');
      }
    });
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    compararDatos()
    // if (username === 'usuario23' && password === 'contraseña123') {
    //   alert('¡Inicio de sesión exitoso!');
    //   navigate('/');
    // } else {
    //   alert('Usuario o contraseña incorrectos');
    // }
  };

  return (
    <>
      <div className="login">
        <div className="form-container">
          <form action="#" className="form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="label">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="ej. usuario23"
              className="input input-username"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              className="input input-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input type="submit" value="Confirmar" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
