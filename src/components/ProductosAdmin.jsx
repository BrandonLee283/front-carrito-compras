import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

const ProductosAdmin = () => {
  const [productos, setProductos] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
      fetch('http://localhost:3001/productosAdmin')
          .then(response => response.json())
          .then(data => {
              setProductos(data[0])
              console.log(data[0]);
          })
          .catch(error => {
              console.error('Error al obtener las categorias:', error);
          });

  }, [])

  const editarProductos = (productoId) => {
      navigate(`/productosAdmin/${productoId}`)
  }
  const eliminarProducto = (productoId) => {
      fetch(`http://localhost:3001/productos/${productoId}`, {
          method: 'DELETE',
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Error en la solicitud');
              }
              return response.json();
          })
          .then(data => {
              console.log(data.message);
          })
          .catch(error => {
              console.error('Error:', error);
          });
      navigate('/bienvenida')
  }
  return (
    <div>
        <NavbarAdmin></NavbarAdmin>
            <span className="material-symbols-outlined" onClick={()=>navigate('/addProductos')}>add_circle</span>
            <table className="table table-striped-columns">
                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Disponibles</th>
                        <th>Categoria</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.map((producto => {
                        if (producto.status_producto === 1) {
                            return (
                                <tr key={producto.id_producto}>
                                    <td>{producto.id_producto}</td>
                                    <td>{producto.nombre_producto}</td>
                                    <td>{producto.precio_producto}</td>
                                    <td><img src={`http://localhost:3001/images/${producto.imagen_prodcuto}`} style={{width:'50px',height:'50px'}} alt={producto.imagen_prodcuto} /></td>
                                    <td>{producto.stock_producto}</td>
                                    <td>{producto.nombre_categoria}</td>
                                    <td><span className="material-symbols-outlined" onClick={() => editarProductos(producto.id_producto)}>edit</span></td>
                                    <td><span className="material-symbols-outlined" onClick={() => eliminarProducto(producto.id_producto)}>delete</span></td>

                                </tr>
                            )
                        }
                        return null;
                    }))}


                </tbody>
            </table>
        </div>
  )
}

export default ProductosAdmin