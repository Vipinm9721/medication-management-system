import React from 'react';
import Dashboard from '../components/Dashboard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">
          Welcome to the Prescription & Medication Management Tool
        </h1>
        <p className="home-description">
          Easily manage prescriptions, appointments, and patient records. Stay on top of your health journey with seamless medical support.
        </p>
      </div>

      <div className="home-grid">
        <div className="home-card">
          <h2 className="card-title">What You Can Do:</h2>
          <ul className="card-list">
            <li>Track your prescriptions and medication timings</li>
            <li>View and manage your medical history</li>
            <li>Book appointments with doctors effortlessly</li>
            <li>Access personalized care and health records</li>
          </ul>
        </div>

        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
