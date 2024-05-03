import React from 'react';
import "./ReviewForm.css";

const ReviewForm = () => {

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
                        <button type="button" className="feedback-button" name="feedbackButton" id="feedbackButton">
                            Click Here
                        </button>
                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ReviewForm;

