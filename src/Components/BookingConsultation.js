import React, { useState, useEffect } from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import './BookingConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DoctorCard from './DoctorCard/DoctorCard';
import { v4 as uuidv4 } from 'uuid';

const BookingConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const [appointments, setAppointments] = useState([]);
    const [cancelAppointment, setCancelAppointment] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedAppointmentData = JSON.parse(localStorage.getItem("appointmentData"));
        if (storedAppointmentData) {
            setAppointments(storedAppointmentData);
        }
    }, [])

    useEffect(() => {
        if (((cancelAppointment === true) && (localStorage.getItem("appointmentData")))) {
            localStorage.removeItem("appointmentData");
            window.dispatchEvent(new Event("storage"));
        }
        if ((appointments.length > 0)) {
            localStorage.setItem("appointmentData", JSON.stringify(appointments));
            window.dispatchEvent(new Event("storage"));
        }

    }, [appointments, cancelAppointment]);

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
        setCancelAppointment(true);
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            ...appointmentData,
        };
        const updatedAppointments = [...appointments, newAppointment];

        setAppointments(updatedAppointments);
        setShowModal(false);
    };

    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                if (searchParams.get('speciality')) {
                    const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());
                    setFilteredDoctors(filtered);
                    setIsSearched(true);
                    window.reload()
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
                setDoctors(data);
            })
            .catch(err => console.log(err));
    }

    const handleModal = () => {
        if (showModal === true) {
            setShowModal(false);
        } else {
            setShowModal(true)
        }
    };

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(
                (doctor) =>
                    doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
            window.location.reload()
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, [searchParams])

    return (
        <div className="container">
            <FindDoctorSearch onSearch={handleSearch} />
            <div className="search-results-container">
                {isSearched ? (
                    <div>
                        <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                        <div className="doctor-search-results">
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => <DoctorCard className="doctorcard" {...doctor} key={doctor.name} appointments={appointments} handleCancel={handleCancel} handleFormSubmit={handleFormSubmit} handleModal={handleModal} />)
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div style={{ padding: "30px" }}>
                Icons by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
            </div>
        </div>
    );
};

export default BookingConsultation;