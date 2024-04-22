import React from 'react';
import { Link } from 'react-router-dom';
import './Sign_Up.css'

const Sign_Up = () => {
    return (
        <div className="container">
            <div className="signup-container">
                <h1>Sign Up</h1>
            
                <form className="signup-form">   
                    <div className="form-group">
                        <label>
                            Role
                            <select className="form-control" name="role" id="role2" placeholder="Select role" required>
                                <option value="Role 1">Role 1</option>
                                <option value="Role 2">Role 2</option>
                                <option value="Role 3">Role 3</option>
                                <option value="Role 4">Role 4</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            First Name
                            <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter your first name" required/>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name
                            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter your last name" required/>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Email
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required/>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Phone Number
                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Enter your phone number" maxLength={10}/>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"/>
                         </label>
                    </div>
                    
                    <div className="signup-btns">
                        <button type="submit" className="create-account-btn">Create Account</button>    
                        
                        <Link to="/login">
                            <button type="button" className="login-btn">
                                Login
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sign_Up;