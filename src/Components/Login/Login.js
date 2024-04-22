import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {    
    return (     
            <div className="container">
                <div className="login-container">
                    <h1>Login</h1>
                    
                    <form className="login-form">   
                        <div className="form-group">         
                            <label>
                                Email
                                <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required/>
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                Password
                                <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" required/>
                            </label>
                        </div>

                        <div className="login-btns">
                            <button type="submit" className="login-btn">
                                Login
                            </button>                            
                            <Link to="/signup">
                                <button type="button" className="create-account-btn">
                                    Create Account
                                </button>
                            </Link>
                        </div>

                        <Link to="/">
                            Forgot password?
                        </Link>
                    </form>   
                </div>
        </div>    
     );
};

export default Login;