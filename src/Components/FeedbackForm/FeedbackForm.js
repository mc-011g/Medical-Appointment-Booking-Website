import React, { useState } from 'react';
import './FeedbackForm.css';
import xIcon from "../AppointmentForm/images/icons8-x-48.png";
import starIcon from './images/star-svgrepo-com.svg';
import starIconYellow from './images/star-svgrepo-com2.svg';

const FeedbackForm = ({ closeModal, onSubmit, currentAppointment, currentAppointmentIndex }) => {
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const ratings = [1, 2, 3, 4, 5];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            reviewText, currentAppointment, currentAppointmentIndex, rating, name
        });
    };

    return (
        <div className="feedbackContainer">
            <img src={xIcon} className="closeButton" onClick={closeModal} />
            <form onSubmit={handleFormSubmit}>
                <h3>Provide Your Review</h3>
                <label>
                    Name:
                    <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Review:
                    <textarea name="review" className="form-control" onChange={(e) => setReviewText(e.target.value)} required />
                </label>
                <label>
                    Rating:
                    <div className="starRatings">
                        {ratings.map((star) => (
                            <>
                                <img src={(rating >= star) ? starIconYellow : starIcon}
                                    className="star"
                                    alt='' name="star1" onClick={(e) => setRating(star)} />
                            </>
                        ))}
                    </div>
                </label>
                <button type="submit" className="feedback-button" name="submitReview">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;

