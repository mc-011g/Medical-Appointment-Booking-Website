import React, { useEffect, useState } from 'react';

const Notification = ({ children }) => {
    const [displayNotification, setDisplayNotification] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
        if (isLoggedIn && doctorData) {
            setDisplayNotification(true);
        }
    }, [])

    return (
        <>
            {displayNotification ? (
                <div className="notification-container">
                    <h3>Appointment Details</h3>
                    <div>Doctor: {doctorData.name}</div>
                    <div>Doctor speciality: {doctorData.speciality}</div>
                    <div>Patient name: {username}</div>
                    <div>Time slot: {appointmentData.timeSlot}</div>
                    <div>Appointment date: {appointmentData.appointmentDate}</div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Notification;