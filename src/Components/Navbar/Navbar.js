import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import navIcon from './images/nav-icon-a-svgrepo-com.svg';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [navDropdown, setNavDropdown] = useState(true);

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

    const handleUserDropdown = () => {
        if (showUserDropdown === true) {
            setShowUserDropdown(false);
        } else {
            setShowUserDropdown(true);
        }
    }

    useEffect(() => {
        setNavDropdown(false);
        const storedEmail = sessionStorage.getItem("email");

        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.split('@')[0]);
        }

    }, []);

    const handleNavDropdown = () => {
        if (navDropdown === false) {
            setNavDropdown(true);
        } else {
            setNavDropdown(false);
        }
    }

    return (
        <nav>
            <div className="nav-top">
                <Link to="/">
                    <div className="nav-logo">
                        <Link to="/">
                            StayHealthy
                        </Link>
                    </div>
                </Link>
                <div className="icon" onClick={handleNavDropdown}>
                    <img src={navIcon} className="navIcon" alt="" />
                </div>
            </div>

            <div className={`nav-btns ${navDropdown && 'nav-btns-column'}`} onClick={handleNavDropdown}>
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
                        <div className="user-btn">
                            <div className="username" onClick={handleUserDropdown}>
                                Welcome, {username}
                            </div>

                            {showUserDropdown &&
                                <div className="userDropdown">
                                    <Link to="/profile">
                                        <div>
                                            Your Profile
                                        </div>
                                    </Link>

                                    <Link to="/reports">
                                        <div>
                                            Your Reports
                                        </div>
                                    </Link>
                                </div>
                            }
                        </div>

                        <button className="large-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" style={{ width: "fit-content" }}>
                            <button className="large-btn">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/login" style={{ width: "fit-content" }}>
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


