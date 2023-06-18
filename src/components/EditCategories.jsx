import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategories = () => {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [datosCargados, setDatosCargados] = useState(false);
    const categoriaId = useParams();

    const actualizar = (e) => {
        e.preventDefault();
        console.log(nombre, descripcion);
        fetch(`http://localhost:3001/categorias/${categoriaId.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, descripcion })
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
            navigate('/categorias')
    };

    const almacenarDatos = (data) => {
        setNombre(data.nombre_categoria || '');
        setDescripcion(data.descripcion_categoria || '');
        setDatosCargados(true);
    };

    useEffect(() => {
        fetch(`http://localhost:3001/categorias/${categoriaId.id}`)
            .then((response) => response.json())
            .then((data) => {
                almacenarDatos(data);
            })
            .catch((error) => {
                console.error('Error al obtener la categoría:', error);
            });
    }, [categoriaId]);

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
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Descripcion
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                <button onClick={actualizar} className="btn btn-primary">
                    Actualizar
                </button>
            </form>
        );
    };

    return (
        <div className="container">
            <h1>Editar Categoria</h1>
            {datosCargados ? retornarValores() : <p>Cargando datos...</p>}
        </div>
    );
};

export default EditCategories;
