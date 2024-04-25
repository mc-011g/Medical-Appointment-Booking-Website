import React from "react";
import doctorImage from "../FindDoctorSearch/images/icons8-doctor-100.png";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings }) => {
    return (
        <div className="doctor-card">
            <div className="doctor-card-info">
                <img className="doctor-card-image" src={doctorImage} />
                <div style={{ fontSize: "18px" }}><b>{name}</b></div>
                <div>{speciality}</div>
                <div>{experience} years of experience</div>
                <div><b>Rating: </b> {ratings}</div>
            </div>

            <button className="book-appointment-button">
                Book appointment
            </button>
        </div>
    );
};

export default DoctorCard;