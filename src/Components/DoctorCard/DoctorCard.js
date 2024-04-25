import React from "react";
import doctorImage from "../FindDoctorSearch/images/icons8-doctor-100.png";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {

    return (
        <div className="doctor-card">

            <div className="doctor-card-info">
                <div>{profilePic}</div>

                <div>{name}</div>
                <div>{speciality}</div>
                <div>Years of experience: {experience}</div>
                <div><b>Rating: </b> {ratings}</div>
            </div>

            <div className="">
                    
            </div>
        </div>
    );
};

export default DoctorCard;