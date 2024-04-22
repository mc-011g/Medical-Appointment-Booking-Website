import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            </div>
        </nav>   
    );
};

export default Navbar;


