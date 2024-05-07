import React, { useEffect, useState } from 'react';
import "./Notification.css";
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
    const [displayNotification, setDisplayNotification] = useState(false);
    const [username, setUsername] = useState("");
    const [appointmentData, setAppointmentData] = useState([]);

    const getEarliestAppointment = () => {
        const appointmentDates = appointmentData.map((appointment) => appointment.appointmentDate);

        const earliestDate = appointmentDates.reduce((previous, current) => {
            return previous > current ? current : previous;
        });

        return earliestDate;
    }

    useEffect(() => {
        const appointmentChange = () => {
            const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
            const storedUsername = sessionStorage.getItem('email');
            if (storedAppointmentData) {
                setAppointmentData(storedAppointmentData);
                if (storedUsername) {
                    setUsername(storedUsername);
                }
                if (storedAppointmentData && storedUsername) {
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
                <>
                    {appointmentData.map((appointment) => (
                        <>
                            {(appointment.appointmentDate === getEarliestAppointment()) ? (
                                <div className="notification-container">
                                    <h3>Appointment Details</h3>
                                    <div>Doctor: {appointment?.doctorName}</div>
                                    <div>Doctor speciality: {appointment?.doctorSpecialty}</div>
                                    <div>Patient name: {appointment?.name}</div>
                                    <div>Time slot: {appointment?.timeSlot}</div>
                                    <div>Appointment date: {appointment?.appointmentDate}</div>
                                </div >
                            ) : (
                                <></>
                            )}
                        </>
                    ))}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Notification;