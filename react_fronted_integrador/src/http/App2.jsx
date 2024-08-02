import React from 'react'
import {ReseñasGral} from "../Components/ReseñasGral.jsx"
import {ReseñasLista} from '../Components/ReseñasList.jsx'


const PaginaPrincipal = () => {
    const [reviews, setReviews] = useState([])

    const addReview = (text) => setReviews([...reviews, text])
    const deleteReview = (index) => setReviews(reviews.filter((_, i) => i !== index))

    return (
    <div className="Contenido">
        <h2>Comparti tu opinion con todos...</h2>
        <ReseñasGral addReview={addReview} />
        <ReseñasLista reviews={reviews} deleteReview={deleteReview} />
    </div>
)
}

export default PaginaPrincipal
