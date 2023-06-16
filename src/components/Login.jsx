import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function LoginComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'usuario23' && password === 'contraseña123') {
      alert('¡Inicio de sesión exitoso!');
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <html lang="en">
        <body>
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
        </body>
      </html>
    </>
  );
}

export default LoginComponent;


//ejemplo para logearte con datos desde una API

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     // Realizar la validación en el servidor utilizando una técnica segura
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       // Inicio de sesión exitoso
//       console.log('¡Inicio de sesión exitoso!');
//     } else {
//       // Error de inicio de sesión
//       console.log('Usuario o contraseña incorrectos');
//     }
//   } catch (error) {
//     console.log('Error al realizar el inicio de sesión', error);
//   }
// };
