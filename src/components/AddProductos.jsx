import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProductos = () => {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagenName, setImagenName] = useState('');

    const [ImagenT, setImagenT] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [disponibles, setDisponibles] = useState('');
    const [categoria, setCategoria] = useState('');
    const [categorias, setCategorias] = useState([])
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
    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];


        const reader = new FileReader();
        reader.onloadend = () => {
            const imageName = file.name;
            setImagenName(imageName);
            console.log(imageName)
            const imageData = reader.result;
            setImagenT(imageData);
        };
        reader.readAsDataURL(file);

    };
    const cambioCombo = (event) => {
        setCategoria(event.target.value);
    };
    const agregar = () => {
        console.log(imagenName);
        if (nombre !== '' && precio !== '' && selectedFile !== '' && imagenName !== '' && disponibles !== '' && categoria) {

            const formData = new FormData();
            formData.append('image', selectedFile);
            axios.post('http://localhost:3001/api/upload', formData)
                .then(response => {
                    console.log('Image uploaded successfully');
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });

            fetch('http://localhost:3001/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, precio, imagenName, disponibles, categoria }),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error al crear el producto');
                })
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error('Error al crear Productos:', error);
                });
            navigate('/productosAdmin')

        } else {
            alert('Faltan campos por llenar')
        }

    }
    return (
        <div>
            <div className="container">
                <h1>Agregar Productos</h1>
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
                        Precio
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Imagen
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="descripcion"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {ImagenT && <img src={(ImagenT)} alt="Selected" style={{ with: '100px', height: '100px' }} />}

                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Diponibles
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={disponibles}
                        onChange={(e) => setDisponibles(e.target.value)}
                    />
                </div>
                <select value={categoria} onChange={cambioCombo}>
                    <option value="Option">Seleccione una Opcion</option>
                    {categorias.map((categoria) => {
                        return (
                            <option key={categoria.id_categoria} value={categoria.nombre_categoria}>{categoria.nombre_categoria}</option>
                        )
                    })}
                </select>
                <button onClick={agregar} className="btn btn-primary">
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default AddProductos