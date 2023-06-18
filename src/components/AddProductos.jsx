import React,{useEffect} from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductos = () => {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');

    const [imagenSelec, setImagenSelec] = useState('');

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
        const file = event.target.files[0];


        const reader = new FileReader();
        reader.onloadend = () => {
            const imageName = file.name;
            setImagen(imageName);
          const imageData = reader.result;
            setImagenSelec(imageData);
        };
        reader.readAsDataURL(file);

      };
      const cambioCombo = (event) => {
        setCategoria(event.target.value);
      };
      const agregar = ()=>{
        if (nombre !== '' && precio !== '' && imagen !== '' && disponibles !== '' && categoria) {
            fetch('http://localhost:3001/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombre, precio, imagen,disponibles,categoria}),
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
                navigate('/productosAdmin')
        }else{
            alert('Faltan campos por llenar')
        }
        
        navigate('/bienvenida')
      }
  return (
    <div>
        <div className="container">
            <h1>Agregar Productos</h1>
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
                    {imagenSelec && <img src={(imagenSelec)} alt="Selected" style={{with:'100px',height:'100px'}}/>}

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
            </form>
        </div>
    </div>
  )
}

export default AddProductos