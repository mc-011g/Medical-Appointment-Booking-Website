import React, { useState } from 'react';
import "./ReviewForm.css";
import Popup from 'reactjs-popup';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const ReviewForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [enableFeedbackButton, setEnableFeedbackButton] = useState(true);

    const handleFormSubmit = (reviewInfo) => {
        setReviewText((JSON.parse(JSON.stringify(reviewInfo))).reviewText);
        setEnableFeedbackButton(false);
    }

    return (
        <div className="container">
            <h1>Reviews</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Doctor Name</th>
                    <th>Doctor Specialty</th>
                    <th>Provide Feedback</th>
                    <th>Review Given</th>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Doctor Name
                    </td>
                    <td>
                        Doctor Specialty
                    </td>
                    <td>
                        <>
                            <Popup trigger={
                                <button type="button" className="feedback-button" name="feedbackButton" id="feedbackButton" disabled={!enableFeedbackButton}>
                                    Click Here
                                </button>
                            }
                                modal
                                open={showModal}
                                onClose={() => setShowModal(false)}
                            >
                                {(close) => (
                                    <FeedbackForm closeModal={close} onSubmit={handleFormSubmit} />
                                )}
                            </Popup>
                        </>
                    </td>
                    <td className="reviewText">
                        {reviewText}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ReviewForm;

