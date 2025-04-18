import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import PatientCare from "./pages/PatientCare";
import Schedule from "./pages/Schedule";
import Doctor from "./pages/Doctor";
import MedicineTiming from "./pages/MedicineTiming";
import "./index.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="menu-container">
            <button className="menu-button" onClick={toggleMenu}>
              {showMenu ? "✖ Close" : "☰ Menu"}
            </button>
            <ul className={`dropdown-menu ${showMenu ? "visible" : ""}`}>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/patient-care" onClick={toggleMenu}>Patient Care</Link></li>
              <li><Link to="/schedule" onClick={toggleMenu}>Schedule an Appointment</Link></li>
              <li><Link to="/find-doctor" onClick={toggleMenu}>Find a Doctor</Link></li>
              <li><Link to="/medicine-timing" onClick={toggleMenu}>Medicine Timing</Link></li>
            </ul>
          </div>

          <ul className="auth-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/patient-care" element={<PatientCare />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/find-doctor" element={<Doctor />} />
            <Route path="/medicine-timing" element={<MedicineTiming />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;