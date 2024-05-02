import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Layout from './Components/Landing_Page/LandingPage';
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";

function App() {
    return (
        <>
            <BrowserRouter>
                <Notification>
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Sign_Up />} />
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                    </Routes>
                </Notification>
            </BrowserRouter>
        </>
    );
}

export default App;
