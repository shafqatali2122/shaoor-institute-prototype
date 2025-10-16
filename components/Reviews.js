// components/Reviews.js
import React from 'react';

// A simple component to render star ratings
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return null; // Don't show anything if there are no reviews
  }

  // Calculate average rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Student Feedback</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        {/* Overall Rating Summary */}
        <div className="flex items-center mb-6">
          <div className="text-5xl font-bold text-gray-800 mr-4">{averageRating}</div>
          <div>
            <StarRating rating={Math.round(averageRating)} />
            <p className="text-sm text-gray-500">{reviews.length} Ratings</p>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border-t pt-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 mr-3">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.author}</h4>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}