import React from 'react';
import './PatientCare.css';

const PatientCare = () => {
  return (
    <div className="patient-care-container">
      <h2 className="patient-care-title">Patient Care</h2>
      <p className="patient-care-intro">
        At <strong>CareConnect</strong>, patient care isn't just a service — it's our commitment. 
        We focus on delivering high-quality, compassionate care tailored to each individual.
      </p>

      <div className="patient-care-section">
        <h3>🩺 Personalized Health Support</h3>
        <p>
          Our team of dedicated professionals works closely with patients to understand 
          their medical history, needs, and preferences to provide personalized treatments.
        </p>
      </div>

      <div className="patient-care-section">
        <h3>💬 24/7 Access to Medical Guidance</h3>
        <p>
          Get round-the-clock assistance through our digital platform. Whether it's prescription help, 
          symptoms advice, or emotional support — we’re here when you need us.
        </p>
      </div>

      <div className="patient-care-section">
        <h3>📋 Our Core Services</h3>
        <ul>
          <li>Routine Checkups & Preventive Care</li>
          <li>Specialist Consultations</li>
          <li>Medication Management</li>
          <li>Health Monitoring Tools</li>
          <li>Appointment Scheduling & Follow-ups</li>
        </ul>
      </div>

      <div className="patient-care-section">
        <h3>💖 Our Promise to You</h3>
        <p>
          We promise to treat every patient with respect, dignity, and attention. 
          Your well-being is our highest priority, and we strive to make every interaction count.
        </p>
      </div>
    </div>
  );
};

export default PatientCare;
