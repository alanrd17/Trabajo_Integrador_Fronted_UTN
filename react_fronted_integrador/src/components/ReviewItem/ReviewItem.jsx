import React from 'react'


function ReviewItem({ review, onDelete }) {
    return (
    <div className="review-item">
    <p>{review}</p>
    <button onClick={onDelete}>Eliminar</button>
    </div>
)
}

export default ReviewItem