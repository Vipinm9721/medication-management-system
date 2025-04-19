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

        <div className="home-card">
          <h2 className="card-title">Your Current Medications</h2>
          <p>✔ Metformin - 850mg daily</p>
          <p>✔ Amoxicillin - 500mg every 8 hours</p>
        </div>

        <div className="home-card">
          <h2 className="card-title">Upcoming Doses</h2>
          <p>🕒 Metformin - 1:00 PM</p>
          <p>🕒 Paracetamol - 10:00 AM and 9:00 PM</p>
        </div>

        <div className="home-card">
          <h2 className="card-title">Recent Actions</h2>
          <p>🔄 Prescription renewal requested for Amoxicillin</p>
          <p>✅ Marked Paracetamol as taken</p>
        </div>
      </div>

      <Dashboard />
    </div>
  );
};

export default Home;












// import React from 'react';
// import Dashboard from '../components/Dashboard';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <h1 className="home-title">
//           Welcome to the Prescription & Medication Management Tool
//         </h1>
//         <p className="home-description">
//           Easily manage prescriptions, appointments, and patient records. Stay on top of your health journey with seamless medical support.
//         </p>
//       </div>

//       <div className="home-grid">
//         <div className="home-card">
//           <h2 className="card-title">What You Can Do:</h2>
//           <ul className="card-list">
//             <li>Track your prescriptions and medication timings</li>
//             <li>View and manage your medical history</li>
//             <li>Book appointments with doctors effortlessly</li>
//             <li>Access personalized care and health records</li>
//           </ul>
//         </div>

//         <Dashboard />
//       </div>

//       <div className="home-sections">
//         <div className="section-card">
//           <h3 className="section-title">💊 Current Medications</h3>
//           <ul className="section-list">
//             <li>Amlodipine 5mg – 1 tablet daily after breakfast</li>
//             <li>Metformin 500mg – 1 tablet twice a day</li>
//             <li>Atorvastatin 10mg – 1 tablet before bedtime</li>
//           </ul>
//         </div>

//         <div className="section-card">
//           <h3 className="section-title">⏰ Upcoming Doses</h3>
//           <ul className="section-list">
//             <li>Metformin – 6:00 PM</li>
//             <li>Atorvastatin – 10:00 PM</li>
//           </ul>
//         </div>

//         <div className="section-card">
//           <h3 className="section-title">📋 Recent Actions</h3>
//           <ul className="section-list">
//             <li>Renewal requested for Amlodipine – Apr 18, 2025</li>
//             <li>Medication added: Atorvastatin – Apr 16, 2025</li>
//             <li>Updated dosage for Metformin – Apr 14, 2025</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;











// import React from 'react';
// import Dashboard from '../components/Dashboard';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <h1 className="home-title">
//           Welcome to the Prescription & Medication Management Tool
//         </h1>
//         <p className="home-description">
//           Easily manage prescriptions, appointments, and patient records. Stay on top of your health journey with seamless medical support.
//         </p>
//       </div>

//       <div className="home-grid">
//         <div className="home-card">
//           <h2 className="card-title">What You Can Do:</h2>
//           <ul className="card-list">
//             <li>Track your prescriptions and medication timings</li>
//             <li>View and manage your medical history</li>
//             <li>Book appointments with doctors effortlessly</li>
//             <li>Access personalized care and health records</li>
//           </ul>
//         </div>

//         <Dashboard />
//       </div>
//     </div>
//   );
// };

// export default Home;
