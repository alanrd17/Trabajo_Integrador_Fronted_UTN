import React from 'react'

const ReseñasGral = ({ addReview }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
        addReview(text)
        setText('')
    }
}

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="4"
                placeholder="Escribe tu Reseña"
            />
                <button type="submit">Agregar Reseña</button>
        </form>
)
}

export default ReseñasGral