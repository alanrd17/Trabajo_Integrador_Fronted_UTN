import React, { useState } from 'react'

const PaginaInicio = () => {
    const [temas, setTemas] = useState([]);
    const [tema, setTema] = useState('');

    const AgregarTema = () => {
        if (tema) {
            setTemas([...temas, tema])
            setTema('')
        }
    }

    const EliminarTema = (index) => {
        setTemas(temas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h2>Página de Inicio</h2>
            <input
                type="text"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                placeholder="Ingrese un nuevo tema"
            />
            <button onClick={AgregarTema}>Agregar Tema</button>
            <div className="topics-list">
                {temas.map((tema, index) => (
                    <div key={index} className="card">
                        <h2>{tema}</h2>
                        <button onClick={() => EliminarTema(index)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaginaInicio;