import React, { useEffect, useState } from "react";
import './ReportsLayout.css';

const ReportsLayout = () => {
    const [appointments, setAppointments] = useState([]);

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
                                    <button type="button" className="btn" name="feedbackButton" id="feedbackButton">
                                        View Report
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn" id="downloadReport" name="downloadReport">
                                        Download Report
                                    </button>
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