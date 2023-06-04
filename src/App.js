import{HashRouter, Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Ordenes from "./components/Ordenes";
import Correo from './components/CorreoInsert'
// import Carrito from './components/Carrito';
// import EmailEnviado from "./components/EmailEnviado";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Productos categoria="" />} />
          <Route path='/productos/:categoria' element={<Productos/>} />
          <Route path='/correo' element={<Correo/>}/>
          
          <Route path='/ordenes' element={<Ordenes/>}/>
          {/* <Route path='/car' element={<Carrito/>}/> */}

          <Route path='*' element={<p>no encontrado</p>}/>
          
        </Routes>
      </HashRouter>
      
      {/* 
      <EmailEnviado></EmailEnviado>
       */}
    </>
  );
}

export default App;
