import React, { useState } from 'react';
import './AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpecialty, doctorRatings, doctorExperience, doctorImage, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber });
        setName('');
        setPhoneNumber('');
    };

    return (
        <div class="book-appointment-container">
            <div className="doctor-card-info">
                <img className="doctor-card-image" src={doctorImage} />
                <div style={{ fontSize: "18px" }}><b>{doctorName}</b></div>
                <div>{doctorSpecialty}</div>
                <div>{doctorExperience} years of experience</div>
                <div><b>Rating: </b> {doctorRatings}</div>
            </div>

            <form onSubmit={handleFormSubmit} className="book-appointment-form">
                <label>
                    Patient name:
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} name="name" id="id" placeholder="Patient Name" required />
                </label>
                <label>
                    Phone number:
                    <input type="tel" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} name="phone" id="phone" placeholder="Phone number" maxLength={10} required />
                </label>
                <label>
                    Appointment date:
                    <input type="date" className="form-control" ame="date" id="date" required />
                </label>
                <label>
                    Appointment time:
                    <input type="time" className="form-control" name="time" id="time" required />
                </label>

                <button type="submit" className="book-appointment-button">
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;