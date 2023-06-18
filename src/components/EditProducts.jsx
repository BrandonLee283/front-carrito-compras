import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProducts = () => {
    const productoId = useParams() ;
    const navigate = useNavigate()

    const [nombreProducto, setNombre] = useState('');
    const [precioProducto, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    const [stockProducto, setDisponibles] = useState('');
    const [nombreCategoria, setCategoria] = useState('');

    const [datosCargados, setDatosCargados] = useState(false);

    const [categorias, setCategorias] = useState([])

    const actualizar = (e) => {
        e.preventDefault();
        console.log(nombreProducto, precioProducto);
        fetch(`http://localhost:3001/productosAdmin/${productoId.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombreProducto, precioProducto, stockProducto, nombreCategoria })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error(error);
            });
            navigate('/productosAdmin')
    }
    useEffect(() => {
        fetch(`http://localhost:3001/productosAdmin/${productoId.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                almacenarDatos(data);
            })
            .catch((error) => {
                console.error('Error al obtener la categoría:', error);
            });
    }, [productoId]);
    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(response => response.json())
            .then(data => {
                setCategorias(data)
                console.log(data);
            })
            .catch(error => {
                console.error('Error al obtener las categorias:', error);
            });

    }, [])
    const almacenarDatos = (data) => {
        setNombre(data[0].nombre_producto || '');
        setPrecio(data[0].precio_producto || '');
        setImagen(data[0].imagen_prodcuto || '');
        setDisponibles(data[0].stock_producto || '');
        setCategoria(data[0].nombre_categoria || '');
        setDatosCargados(true);
    };

    
    const cambioCombo = (event) => {
        setCategoria(event.target.value);
      };
    const retornarValores = () => {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombreProducto}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Precio
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={precioProducto}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Disponibles
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={stockProducto}
                        onChange={(e) => setDisponibles(e.target.value)}
                    />
                </div>

                <select value={nombreCategoria} onChange={cambioCombo}>
                    <option value="Option">Seleccione una Opcion</option>
                    {categorias.map((categoria) => {
                        return (
                            <option key={categoria.id_categoria} value={categoria.nombre_categoria}>{categoria.nombre_categoria}</option>
                        )
                    })}
                </select>


                <button onClick={actualizar} className="btn btn-primary">
                    Actualizar
                </button>
            </form>
        )
    }

    return (
        <div className="container">
            <h1>Editar Productos</h1>
            {datosCargados ? retornarValores() : <p>Cargando datos...</p>}
        </div>
    )
}

export default EditProducts