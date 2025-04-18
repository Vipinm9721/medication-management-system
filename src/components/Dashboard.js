import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
      <p>Upcoming Medications:</p>
      <ul>
        <li>Amoxicillin - 8:00 AM</li>
        <li>Metformin - 1:00 PM</li>
      </ul>
    </div>
  );
};

export default Dashboard;