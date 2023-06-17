import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Ordenes from "./components/Ordenes";
import Correo from './components/CorreoInsert';
import Enviado from "./components/EmailEnviado";
import LoginComponent from './components/Login';
import NavbarAdmin from './components/NavbarAdmin';
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginComponent />} default /> 
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/productos' element={<Productos categoria="" />} />
          <Route path='/productos/:categoria' element={<Productos />} />
          <Route path='/correo' element={<Correo />} />
          <Route path='/enviado' element={<Enviado />} />
          <Route path='/ordenes' element={<Ordenes />} />
          <Route path='/navbar' element={<Navbar></Navbar>} />
          <Route path='/navbarAdmin' element={<NavbarAdmin></NavbarAdmin>} />


          <Route path='*' element={<p>no encontrado</p>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
