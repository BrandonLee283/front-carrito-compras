import{HashRouter, Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Ordenes from "./components/Ordenes";
import Correo from './components/CorreoInsert';
import Enviado from "./components/EmailEnviado";
import LoginComponent from './components/Login';
function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Productos categoria="" />} />
          <Route path='/productos/:categoria' element={<Productos/>} />
          <Route path='/correo' element={<Correo/>}/>
          <Route path='/enviado' element={<Enviado/>}/>
          <Route path='/ordenes' element={<Ordenes/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
          

          <Route path='*' element={<p>no encontrado</p>}/>
          
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
