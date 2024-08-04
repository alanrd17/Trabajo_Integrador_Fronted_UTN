import React, { useState } from 'react'


function Home() {
    const [reviews, setReviews] = useState([])

    const addReview = (review) => {
    setReviews([...reviews, review])
}

    const deleteReview = (index) => {
    setReviews(reviews.filter((_, i) => i !== index))
}

    return (
    <main>
    <h1>Inicio - Literatura Ambulante</h1>
    <ReviewForm addReview={addReview} />
    <ReviewList reviews={reviews} deleteReview={deleteReview} />
    </main>
)
}

export default Home