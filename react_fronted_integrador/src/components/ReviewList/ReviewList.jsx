import React from 'react'
import ReviewItem from './ReviewItem'

function Reviewlist({ reviews, deleteReview }) {
    return (
    <div className="review-list">
    {reviews.map((review, index) => (
        <ReviewItem
        key={index}
        review={review}
        onDelete={() => deleteReview(index)}
        />
    ))}
    </div>
)
}
console.log ("Reviewlist")

export default Reviewlist