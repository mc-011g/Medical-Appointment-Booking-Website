import React, { useEffect, useState } from 'react';
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import './ProfileCard.css';

const ProfileCard = () => {
    const [editMode, setEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        } else {
            fetchUserProfile();
        }
    }, [navigate]);

    const fetchUserProfile = async () => {
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email"); // Get the email from session storage
            if (!authtoken) {
                navigate("/login");
            } else {
                const response = await fetch(`${API_URL}/api/auth/user`, {
                    headers: {
                        "Authorization": `Bearer ${authtoken}`,
                        "Email": email, // Add the email to the headers
                    },
                });
                if (response.ok) {
                    const user = await response.json();
                    setUserDetails(user);
                    setUpdatedDetails(user);
                } else {
                    // Handle error case
                    throw new Error("Failed to fetch user profile");
                }
            }
        } catch (error) {
            console.error(error);
            // Handle error case
        }
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleInputChange = (e) => {
        setUpdatedDetails({
            ...updatedDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email"); // Get the email from session storage

            if (!authtoken || !email) {
                navigate("/login");
                return;
            }
            const payload = { ...updatedDetails };
            const response = await fetch(`${API_URL}/api/auth/user`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${authtoken}`,
                    "Content-Type": "application/json",
                    "Email": email,
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                // Update the user details in session storage
                sessionStorage.setItem("name", updatedDetails.name);
                sessionStorage.setItem("phone", updatedDetails.phone);
                setUserDetails(updatedDetails);
                setEditMode(false);
                // Display success message to the user
                alert(`Profile Updated Successfully!`);
                navigate("/");
            } else {
                // Handle error case
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            // Handle error case
        }
    };

    return (
        <div className="container">
            <div className="profile-container">
                {!editMode ? (
                    <>
                        <h1>Hello, {userDetails.name}</h1>
                        <label><b>Email: </b> <div>{userDetails.email}</div></label>
                        <label><b>Phone: </b> <div>{userDetails.phone}</div></label>

                        <button type="button" className="btn edit-btn" name="edit-button" id="edit-button" onClick={handleEdit}>
                            Edit
                        </button>
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            <b>Email:</b>
                            <input type="text" className="form-control" name="email" id="email" value={userDetails.email} disabled />
                        </label>
                        <label>
                            <b>Name:</b>
                            <input type="text" className="form-control" name="name" id="name" value={updatedDetails.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            <b>Phone:</b>
                            <input type="text" className="form-control" name="phone" id="phone" value={updatedDetails.phone} onChange={handleInputChange} />
                        </label>
                        <button type="submit" className="btn save-btn" name="save-button" id="save-button">
                            Save
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;