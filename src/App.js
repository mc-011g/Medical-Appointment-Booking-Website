import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Layout from './Components/Landing_Page/LandingPage';
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";

function App() {
  return (
    <>    
        <BrowserRouter>
            <Navbar/>
                <Routes>       
                    <Route path="/" element={<Layout/>}/>  
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Sign_Up/>}/>                
                </Routes>
        </BrowserRouter>       
    </>
  );
}

export default App;
