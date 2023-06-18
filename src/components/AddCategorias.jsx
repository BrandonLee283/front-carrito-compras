import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategorias = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate()
    const agregar = () => {
        if (nombre !== '' && descripcion !== '') {
            fetch('http://localhost:3001/categorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombre, descripcion}),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error al crear la categoría');
                })
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error('Error al crear la categoría:', error);
                });
                navigate('/categorias')
        }else{
            alert('Faltan campos por llenar')
        }
    }
    return (
        <div className="container">
            <h1>Agregar Categorias</h1>
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

                <button onClick={agregar} className="btn btn-primary">
                    Agregar
                </button>
        </div>
    )
}

export default AddCategorias