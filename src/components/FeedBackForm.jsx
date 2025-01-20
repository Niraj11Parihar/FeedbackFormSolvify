import React, { useState } from 'react';
import { db, ref, set } from '../firebase';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0); // Rating will be a number from 1 to 5
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStarClick = (index) => {
    setRating(index); // Set the rating based on the star clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const feedbackData = { name, email, rating, comments };

    try {
      // Send data to Firebase Realtime Database
      const feedbackRef = ref(db, 'feedbacks/' + Date.now()); // Using timestamp as unique key
      await set(feedbackRef, feedbackData);

      console.log("Feedback submitted:", feedbackData);
      alert('Feedback submitted successfully!');
      
      // Reset form
      setName('');
      setEmail('');
      setRating(0);
      setComments('');
    } catch (e) {
      console.error("Error submitting feedback:", e);
      alert('Error submitting feedback.');
    }

    setLoading(false);
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback-form-heading">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(star)} // Set rating on star click
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            className="form-textarea"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
