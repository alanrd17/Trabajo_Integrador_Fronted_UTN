import React from 'react'
import ReviewItem from './ReviewItem'
import '../styles/ReviewList.css'

function ReviewList({ reviews, deleteReview }) {
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

export default ReviewList