import React from 'react';
import './FindDoctor.css'; // optional, or include styles in App.css

const FindDoctor = () => {
  return (
    <div className="find-doctor-container">
      <h2 className="find-doctor-title">Find a Doctor</h2>
      <p className="find-doctor-intro">
        Searching for a qualified and compassionate doctor has never been easier.
        Use the form below to find a specialist that meets your healthcare needs.
      </p>

      <form className="doctor-search-form">
        <div className="form-group">
          <label>Doctor's Name</label>
          <input type="text" placeholder="Enter doctor's name" />
        </div>

        <div className="form-group">
          <label>Specialization</label>
          <select>
            <option value="">Select specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="City or hospital name" />
        </div>

        <button type="submit" className="search-btn">Search Doctor</button>
      </form>
    </div>
  );
};

export default FindDoctor;
