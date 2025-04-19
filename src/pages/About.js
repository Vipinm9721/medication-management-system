import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-intro">
        Welcome to <strong>CareConnect</strong>, your trusted companion in healthcare. 
        We are committed to making healthcare simple, accessible, and personal.
      </p>

      <div className="about-section">
        <h3>💡 Our Mission</h3>
        <p>
          Our mission is to empower individuals with seamless access to quality care 
          and personalized medical support using innovative digital tools.
        </p>
      </div>

      <div className="about-section">
        <h3>🌟 Why Choose Us?</h3>
        <ul>
          <li>Easy-to-use patient interface</li>
          <li>Secure appointment scheduling</li>
          <li>Comprehensive health profiles</li>
          <li>Real-time medical updates</li>
          <li>Experienced and compassionate professionals</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🤝 Our Promise</h3>
        <p>
          At CareConnect, we promise to be with you at every step of your wellness journey. 
          Whether you're booking an appointment or managing prescriptions, we're here to help.
        </p>
      </div>
    </div>
  );
};

export default About;
