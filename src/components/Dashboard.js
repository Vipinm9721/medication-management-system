import React, { useState } from 'react';
import './Dashboard.css';

const medicationHistory = [
  { id: 1, name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM', status: 'Taken', date: '2025-04-10', type: 'Current' },
  { id: 2, name: 'Metformin', dosage: '850mg', time: '1:00 PM', status: 'Missed', date: '2025-04-09', type: 'Past' },
  { id: 3, name: 'Paracetamol', dosage: '650mg', time: '10:00 AM', status: 'Taken', date: '2025-04-08', type: 'Past' },
  { id: 4, name: 'Doxycycline', dosage: '100mg', time: '11:00 AM', status: 'Renewed', date: '2025-04-07', type: 'Past' },
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [filteredHistory, setFilteredHistory] = useState(medicationHistory);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterHistory(e.target.value, statusFilter);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterHistory(searchTerm, status);
  };

  const filterHistory = (search, status) => {
    const filtered = medicationHistory.filter((med) => {
      const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === 'All' || med.status === status;
      return matchesSearch && matchesStatus;
    });
    setFilteredHistory(filtered);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">💊 Medication Timeline</h2>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by medication name..."
          className="search-input"
        />
      </div>
      
      {/* Filters */}
      <div className="filters">
        <button onClick={() => handleStatusFilter('All')} className={`filter-btn ${statusFilter === 'All' ? 'active' : ''}`}>All</button>
        <button onClick={() => handleStatusFilter('Taken')} className={`filter-btn ${statusFilter === 'Taken' ? 'active' : ''}`}>Taken</button>
        <button onClick={() => handleStatusFilter('Missed')} className={`filter-btn ${statusFilter === 'Missed' ? 'active' : ''}`}>Missed</button>
        <button onClick={() => handleStatusFilter('Renewed')} className={`filter-btn ${statusFilter === 'Renewed' ? 'active' : ''}`}>Renewed</button>
      </div>

      {/* Medication Timeline */}
      <div className="timeline">
        {filteredHistory.map((med) => (
          <div key={med.id} className={`timeline-item ${med.type === 'Current' ? 'current-med' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{med.name} - {med.dosage}</h4>
              <p>{med.status} at {med.time}</p>
              <span className="timeline-date">{med.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;