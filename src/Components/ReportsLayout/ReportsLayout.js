import React, { useEffect, useState } from "react";
import './ReportsLayout.css';
import { useNavigate } from "react-router-dom";

const ReportsLayout = () => {
    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem("appointmentData"));

        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, [])

    return (
        <div className="container">
            <h1>Reports</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Doctor Name</th>
                    <th>Doctor Specialty</th>
                    <th>View</th>
                    <th>Download</th>
                </tr>

                {(appointments.length > 0) ? (
                    <>
                        {appointments.map((appointment) => (
                            <tr>
                                <td>
                                    {appointments.indexOf(appointment) + 1}
                                </td>
                                <td>
                                    {appointment.doctorName}
                                </td>
                                <td>
                                    {appointment.doctorSpecialty}
                                </td>
                                <td>
                                    <a href={process.env.PUBLIC_URL + '/patient_report.pdf'} target="_blank" rel="noreferrer">
                                        <button type="button" className="btn" name="feedbackButton" id="feedbackButton">
                                            View Report
                                        </button>
                                    </a>
                                </td>
                                <td>
                                    <a href={process.env.PUBLIC_URL + 'patient_report.pdf'} download>
                                        <button type="button" className="btn" id="downloadReport" name="downloadReport">
                                            Download Report
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        ))
                        }
                    </>
                ) : (
                    <></>
                )}
            </table>
        </div>
    );
};

export default ReportsLayout;