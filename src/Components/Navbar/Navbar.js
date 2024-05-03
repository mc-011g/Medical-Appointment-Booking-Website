import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");

        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    }

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");

        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.split('@')[0]);
        }
    }, []);

    return (
        <nav>
            <Link to="/">
                <div className="nav-logo">
                    StayHealthy
                </div>
            </Link>
            <div className="nav-btns">
                <Link to="/">
                    <button className="nav-btn">
                        Home
                    </button>
                </Link>
                <Link to="/">
                    <button className="nav-btn">
                        Appointments
                    </button>
                </Link>
                <Link to="/booking-consultation">
                    <button className="nav-btn">
                        Booking Consultation
                    </button>
                </Link>
                <Link to="/reviews">
                    <button className="nav-btn">
                        Reviews
                    </button>
                </Link>

                {isLoggedIn ? (
                    <>
                        <div className="username">
                            Welcome, {username}
                        </div>
                        <button className="large-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup">
                            <button className="large-btn">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="large-btn">
                                Login
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


