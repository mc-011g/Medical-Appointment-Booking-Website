import React from "react";
import doctorImage from "../FindDoctorSearch/images/icons8-doctor-100.png";
import "./DoctorCard.css";
import Popup from 'reactjs-popup';
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import xIcon from "../AppointmentForm/images/icons8-x-48.png";

const DoctorCard = ({ name, speciality, experience, ratings, appointments, handleCancel, handleFormSubmit, handleModal }) => {

    return (
        <div className="doctor-card">
            <div className="doctor-card-info">
                <img className="doctor-card-image" src={doctorImage} alt="Doctor" />
                <div style={{ fontSize: "18px" }}><b>{name}</b></div>
                <div>{speciality}</div>
                <div>{experience} years of experience</div>
                <div><b>Rating: </b> {ratings}</div>
            </div>

            <Popup trigger={
                <button className={`book-appointment-button ${((appointments.length > 0) && (appointments.find((appointment) => appointment.doctorName === name))) ? 'cancel-appointment-button' : ''}`}>
                    {(appointments.find((appointment) => appointment.doctorName === name)) ? (
                        <div>Cancel appointment</div>
                    ) : (
                        <div>Book appointment</div>
                    )}
                </button>
            }
                modal
                open={handleModal}
                onClose={handleModal}
            >
                {(close) => (
                    <>
                        {((appointments.find((appointment) => appointment.doctorName === name))) ? (
                            <div className="appointment-booked">
                                <img src={xIcon} className="closeButton" onClick={close} alt="" />
                                <h3>Appointment Booked</h3>

                                {appointments.map((appointment) => (
                                    <>
                                        {(appointment.doctorName === name) ? (
                                            <div className="bookedInfo" key={appointment.id}>
                                                <p>Name: {appointment.name}</p>
                                                <p>Phone Number: {appointment.phoneNumber}</p>
                                                <button className="book-appointment-button cancel-appointment-button" onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                ))}

                            </div>
                        ) : (
                            <AppointmentForm doctorName={name} doctorSpecialty={speciality} doctorExperience={experience} doctorRatings={ratings} doctorImage={doctorImage} onSubmit={handleFormSubmit} closeModal={close} xIcon={xIcon} />
                        )}
                    </>
                )}
            </Popup>
        </div>
    );
};

export default DoctorCard;