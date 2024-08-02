import React from 'react'

const ReseñasLista = ({ Reseñas, EmilinarReseña }) => (
    <div>
    {Reseñas.map((RESEÑA, index) => (
        <div key={index} className="Reseña-item">
        <p>{RESEÑA}</p>
        <button onClick={() => EmilinarReseña(index)}>Emilinar</button>
        </div>
    ))}
</div>
)

export default ReseñasLista