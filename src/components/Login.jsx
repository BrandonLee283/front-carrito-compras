import React from 'react';
import '../styles/login.css'

function LoginComponent() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Patua+One&family=Quicksand:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="login">
            <div className="form-container">
              <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
              <h1 className="title">Ingresar a B&A ElectroVerse</h1>
              <p className="subtitle">Ingrese su usuario y contraseña</p>
              <form action="#" className="form">
                <label htmlFor="password" className="label">
                  Nombre de usuario
                </label>
                <input type="text" id="password" placeholder="ej. usuario23" className="input input-password" />
                <label htmlFor="new-password" className="label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="**********"
                  className="input input-password"
                />
                <input type="submit" value="Confirm" className="primary-button login-button" />
              </form>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

export default LoginComponent;
