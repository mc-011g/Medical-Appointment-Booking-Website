import React, { useEffect, useState } from 'react';
import "./Notification.css";
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
    const [displayNotification, setDisplayNotification] = useState(false);
    const [username, setUsername] = useState("");
    const [appointmentData, setAppointmentData] = useState([]);

    useEffect(() => {
        const appointmentChange = () => {
            const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
            const storedUsername = sessionStorage.getItem('email');
            if (storedAppointmentData) {
                setAppointmentData(storedAppointmentData);
                if (storedUsername) {
                    setUsername(storedUsername);
                }
                if (storedUsername && storedAppointmentData) {
                    setDisplayNotification(true);
                }
            } else if (!storedAppointmentData) {
                setAppointmentData([]);
                setDisplayNotification(false);
            }
        }

        const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
        const storedUsername = sessionStorage.getItem('email');
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedUsername && storedAppointmentData) {
            setDisplayNotification(true);
        }

        window.addEventListener("storage", appointmentChange)
        return () => window.removeEventListener("storage", appointmentChange)
    }, [])

    return (
        <>
            <Navbar></Navbar>
            {children}
            {displayNotification ? (
                <div className="notification-container">
                    <h3>Appointment Details</h3>
                    <div>Doctor: {appointmentData[0]?.doctorName}</div>
                    <div>Doctor speciality: {appointmentData[0]?.doctorSpecialty}</div>
                    <div>Patient name: {appointmentData[0]?.name}</div>
                    <div>Time slot: {appointmentData[0]?.timeSlot}</div>
                    <div>Appointment date: {appointmentData[0]?.appointmentDate}</div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Notification;