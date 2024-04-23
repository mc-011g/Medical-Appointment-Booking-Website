import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { API_URL } from '../../config'

const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/")
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // name: name,
                email: email,
                password: password,
            }),
        });

        const json = await res.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            navigate('/');
            window.location.reload()
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <h1>Login</h1>

                <form className="login-form" onSubmit={login}>
                    <div className="form-group">
                        <label>
                            Email
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Enter your password" required />
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