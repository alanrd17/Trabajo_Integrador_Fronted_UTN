import React, { useState } from 'react'
import '../styles/ReviewForm.css'

function ReviewForm({ addReview }) {
    const [reviewText, setReviewText] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    if (reviewText) {
    addReview(reviewText)
    setReviewText('')
    }
}

    return (
    <form onSubmit={handleSubmit}>
    <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Escribe tu reseña aquí..."
    />
    <button type="submit">Agregar Reseña</button>
    </form>
)
}

export default ReviewForm