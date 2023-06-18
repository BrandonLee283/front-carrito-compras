import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Ordenes from "./components/Ordenes";
import Correo from './components/CorreoInsert';
import Enviado from "./components/EmailEnviado";
import LoginComponent from './components/Login';

import Categorias from './components/Categorias';
import EditCategories from './components/EditCategories';
import NavbarAdmin from './components/NavbarAdmin';
import Bienvenida from './components/Bienvenida';
import ProductosAdmin from './components/ProductosAdmin';
import EditProducts from './components/EditProducts';
import AddCategorias from './components/AddCategorias';
import AddProductos from './components/AddProductos';

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
          <Route path='/bienvenida' element={<Bienvenida></Bienvenida>} />
          <Route path='/categorias' element={<Categorias></Categorias>} />
          <Route path='/categorias/:id' element={<EditCategories></EditCategories>} />
          <Route path='/productosAdmin' element={<ProductosAdmin></ProductosAdmin>} />
          <Route path='/productosAdmin/:id' element={<EditProducts></EditProducts>} />
          <Route path='/addCategorias' element={<AddCategorias></AddCategorias>}/>
          <Route path='/addProductos' element={<AddProductos></AddProductos>}></Route>
          <Route path='*' element={<p>no encontrado</p>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
