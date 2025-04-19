import React from 'react';
import './ScheduleAppointment.css';

const ScheduleAppointment = () => {
  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Schedule an Appointment</h2>
      <p className="appointment-intro">
        Booking an appointment with our healthcare experts is quick and easy. 
        Just provide a few details and we’ll take care of the rest!
      </p>

      <form className="appointment-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>Select Date</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <input type="time" required />
        </div>

        <div className="form-group">
          <label>Reason for Visit</label>
          <textarea placeholder="Brief description (optional)" rows="3"></textarea>
        </div>

        <button type="submit" className="appointment-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;









