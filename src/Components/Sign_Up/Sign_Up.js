import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("lastName", lastName);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="container">
            <div className="signup-container">
                <h1>Sign Up</h1>

                <form className="signup-form" method="POST" onSubmit={register}>
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
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="name" id="name" placeholder="Enter your first name" required />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter your last name" required />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Email
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </label>
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                    </div>

                    <div className="form-group">
                        <label>
                            Phone Number
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control" name="phone" id="phone" placeholder="Enter your phone number" maxLength={10} />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Enter your password" />
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
}

export default Sign_Up;