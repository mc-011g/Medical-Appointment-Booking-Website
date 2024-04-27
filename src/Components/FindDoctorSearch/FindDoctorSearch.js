import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import "./FindDoctorSearch.css";
import searchIcon from "./images/icons8-search.svg";
import searchIconBlack from "./images/icons8-search-black.svg";
import doctorIcon from "./images/icons8-doctor-100.png";

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/booking-consultation?speciality=${speciality}`);
        window.location.reload();
    }

    return (
        <div className="search-doctor-container">
            <h1>Find a doctor</h1>

            <div style={{ marginBottom: "15px" }}>
                <img style={{ width: "200px" }} src={doctorIcon} />
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search doctors by specialty" className="form-control" name="search" id="search" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                <img className="search-icon" src={searchIcon} />
            </div>

            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                {
                    specialities.map(speciality =>
                        <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                            <div>
                                <span><img src={searchIconBlack} alt="" style={{ height: "10px", width: "10px", marginRight: "10px" }} width="12" /></span>
                                <span>{speciality}</span>
                            </div>
                            <span style={{ color: "#B3B3B3" }}>SPECIALITY</span>
                        </div>)
                }
            </div>
        </div>
    );
};

export default FindDoctorSearch;