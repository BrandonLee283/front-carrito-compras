import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    const navigate = useNavigate()
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
    const editarCategoria = (categoriaId) => {
        navigate(`/categorias/${categoriaId}`)
    }
    const eliminarCategoria = (categoriaId) => {
        fetch(`http://localhost:3001/categorias/${categoriaId}`, {
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
            <span className="material-symbols-outlined" onClick={()=>navigate('/addCategorias')}>add_circle</span>
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria => {
                        if (categoria.status_categoria === 1) {
                            return (
                                <tr key={categoria.id_categoria}>
                                    <td>{categoria.id_categoria}</td>
                                    <td>{categoria.nombre_categoria}</td>
                                    <td>{categoria.descripcion_categoria}</td>
                                    <td><span className="material-symbols-outlined" onClick={() => editarCategoria(categoria.id_categoria)}>edit</span></td>
                                    <td><span className="material-symbols-outlined" onClick={() => eliminarCategoria(categoria.id_categoria)}>delete</span></td>

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

export default Categorias