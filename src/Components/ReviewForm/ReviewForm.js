import React, { useEffect, useState } from 'react';
import "./ReviewForm.css";
import Popup from 'reactjs-popup';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const ReviewForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState('');

    const handleFormSubmit = (reviewInfo) => {
        const updatedAppointment = {
            ...reviewInfo.currentAppointment,
            reviewInfo: reviewInfo.reviewText,
            reviewRating: reviewInfo.rating,
            reviewPatientName: reviewInfo.name
        }

        const updatedAppointments = appointments.map((appointment) => {
            if (reviewInfo.currentAppointmentIndex === appointments.indexOf(appointment)) {
                appointment = updatedAppointment;
                return appointment;
            } else {
                return appointment;
            }
        });

        setAppointments(updatedAppointments);
    }

    useEffect(() => {
        const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
        if (storedAppointmentData) {
            setAppointments(storedAppointmentData);
        }
    }, [])

    useEffect(() => {
        if (appointments !== '') {
            localStorage.setItem('appointmentData', JSON.stringify(appointments));
        }
    }, [appointments])

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

                {(appointments.length > 0) ? (
                    <>
                        {appointments.map((appointment) => (
                            <tr>
                                <td>
                                    {appointments.indexOf(appointment) + 1}
                                </td>
                                <td>
                                    {appointment.doctorName}
                                </td>
                                <td>
                                    {appointment.doctorSpecialty}
                                </td>
                                <td>
                                    <>
                                        <Popup trigger={
                                            <button type="button" className="feedback-button" name="feedbackButton" id="feedbackButton" disabled={appointment.reviewInfo}>
                                                Click Here
                                            </button>
                                        }
                                            modal
                                            open={showModal}
                                            onClose={() => setShowModal(false)}
                                        >
                                            {(close) => (
                                                <FeedbackForm closeModal={close} onSubmit={handleFormSubmit} currentAppointment={appointment} currentAppointmentIndex={appointments.indexOf(appointment)} />
                                            )}
                                        </Popup>
                                    </>
                                </td>
                                <td>
                                    {appointment?.reviewInfo}
                                </td>
                            </tr>
                        ))
                        }
                    </>
                ) : (
                    <></>
                )}
            </table>
        </div>
    );
};

export default ReviewForm;

