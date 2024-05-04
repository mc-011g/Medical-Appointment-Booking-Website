import React, { useState } from 'react';
import './AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpecialty, doctorRatings, doctorExperience, doctorImage, onSubmit, closeModal, xIcon }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();            
        onSubmit({
            name, phoneNumber,
            doctorName, doctorSpecialty,
            appointmentDate, timeSlot
        });
    };

    return (
        <div class="book-appointment-container">
            <div className="doctor-card-info">
                <img className="closeButton" onClick={closeModal} src={xIcon} />
                <img className="doctor-card-image" src={doctorImage} />
                <div style={{ fontSize: "18px" }}><b>{doctorName}</b></div>
                <div>{doctorSpecialty}</div>
                <div>{doctorExperience} years of experience</div>
                <div><b>Rating: </b> {doctorRatings}</div>
            </div>

            <form onSubmit={handleFormSubmit} className="book-appointment-form">
                <label>
                    Patient name:
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Patient Name" required />
                </label>
                <label>
                    Phone number:
                    <input type="tel" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} name="phone" id="phone" placeholder="Phone number" maxLength={10} required />
                </label>
                <label>
                    Appointment date:
                    <input type="date" onChange={(e) => setAppointmentDate(e.target.value)} className="form-control" name="appointmentDate" id="appointmentDate" required />
                </label>
                <label>
                    Appointment time slot:
                    <select value={timeSlot} className="form-control" name="timeSlot" id="timeSlot" onChange={(e) => setTimeSlot(e.target.value)} required>
                        <option value="8:00AM">8:00AM</option>
                        <option value="8:30AM">8:30AM</option>
                        <option value="9:00AM">9:00AM</option>
                        <option value="9:30AM">9:30AM</option>
                    </select>
                </label>
                <button type="submit" className="book-appointment-button">
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;