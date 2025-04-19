import React, { useState } from 'react';
import './Dashboard.css';

// Sample data for medication history with timeline
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









// import React, { useState } from 'react';
// import './Dashboard.css';

// // Example medications with expiration dates
// const initialMedications = [
//   { name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM', expiryDate: '2025-04-21', status: 'active' },
//   { name: 'Metformin', dosage: '850mg', time: '1:00 PM', expiryDate: '2025-04-30', status: 'active' },
//   { name: 'Paracetamol', dosage: '650mg', time: '10:00 AM & 9:00 PM', expiryDate: '2025-04-18', status: 'active' },
//   { name: 'Doxycycline', dosage: '100mg', time: '11:00 AM', expiryDate: '2025-04-25', status: 'active' },
// ];

// const getDaysUntilExpiry = (expiryDate) => {
//   const currentDate = new Date();
//   const expiry = new Date(expiryDate);
//   const timeDiff = expiry - currentDate;
//   const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days
//   return daysRemaining;
// };

// const getBadge = (days) => {
//   if (days < 0) return { label: 'Expired', color: 'red' };
//   if (days <= 3) return { label: 'Expiring Soon', color: 'yellow' };
//   return { label: 'Active', color: 'green' };
// };

// const Dashboard = () => {
//   const [taken, setTaken] = useState({});
//   const [renewed, setRenewed] = useState({});

//   const handleMarkAsTaken = (index) => {
//     setTaken((prev) => ({ ...prev, [index]: true }));
//   };

//   const handleRequestRenewal = (index) => {
//     const confirmed = window.confirm('Do you want to request a renewal?');
//     if (confirmed) {
//       setRenewed((prev) => ({ ...prev, [index]: 'Pending' }));
//       setTimeout(() => {
//         setRenewed((prev) => ({ ...prev, [index]: 'Approved' }));
//       }, 2000);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">💊 Medication Dashboard</h2>
//       <div className="medications-grid">
//         {initialMedications.map((med, index) => {
//           const daysRemaining = getDaysUntilExpiry(med.expiryDate);
//           const badge = getBadge(daysRemaining);

//           return (
//             <div key={index} className="medication-card">
//               <div className="medication-header">
//                 <h3 className="medication-name">{med.name}</h3>
//                 <span className={`badge ${badge.color}`}>{badge.label}</span>
//               </div>
//               <p className="medication-info">📝 <strong>Dosage:</strong> {med.dosage}</p>
//               <p className="medication-info">⏰ <strong>Time:</strong> {med.time}</p>
//               <div className="action-buttons">
//                 <button
//                   className={`button mark-taken ${taken[index] ? 'clicked' : ''}`}
//                   onClick={() => handleMarkAsTaken(index)}
//                 >
//                   {taken[index] ? 'Taken ✅' : 'Mark as Taken'}
//                 </button>
//                 <button
//                   className={`button renewal ${renewed[index] ? 'disabled' : ''}`}
//                   onClick={() => handleRequestRenewal(index)}
//                   disabled={renewed[index] === 'Pending'}
//                 >
//                   {renewed[index] === 'Approved' ? 'Renewed ✅' : renewed[index] || 'Request Renewal'}
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











// import React, { useState } from 'react';
// import './Dashboard.css';

// const initialMedications = [
//   { id: 1, name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM', taken: false, renewalRequested: false },
//   { id: 2, name: 'Metformin', dosage: '850mg', time: '1:00 PM', taken: false, renewalRequested: false },
//   { id: 3, name: 'Paracetamol', dosage: '650mg', time: '10:00 AM & 9:00 PM', taken: false, renewalRequested: false },
//   { id: 4, name: 'Doxycycline', dosage: '100mg', time: '11:00 AM', taken: false, renewalRequested: false },
// ];

// const Dashboard = () => {
//   const [medications, setMedications] = useState(initialMedications);

//   const handleMarkAsTaken = (id) => {
//     const updatedMeds = medications.map((med) =>
//       med.id === id ? { ...med, taken: true } : med
//     );
//     setMedications(updatedMeds);
//   };

//   const handleRequestRenewal = (id) => {
//     const updatedMeds = medications.map((med) =>
//       med.id === id ? { ...med, renewalRequested: true } : med
//     );
//     setMedications(updatedMeds);
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">💊 Medication Dashboard</h2>
//       <div className="medications-grid">
//         {medications.map((med) => (
//           <div
//             key={med.id}
//             className={`medication-card ${med.taken ? 'taken' : ''} ${med.renewalRequested ? 'renewed' : ''}`}
//           >
//             <h3 className="medication-name">{med.name}</h3>
//             <p className="medication-info">📝 <strong>Dosage:</strong> {med.dosage}</p>
//             <p className="medication-info">⏰ <strong>Time:</strong> {med.time}</p>
//             <div className="action-buttons">
//               <button
//                 className="button mark-taken"
//                 onClick={() => handleMarkAsTaken(med.id)}
//                 disabled={med.taken}
//               >
//                 {med.taken ? 'Taken ✅' : 'Mark as Taken'}
//               </button>
//               <button
//                 className="button renewal"
//                 onClick={() => handleRequestRenewal(med.id)}
//                 disabled={med.renewalRequested}
//               >
//                 {med.renewalRequested ? 'Renewal Requested ✅' : 'Request Renewal'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;










// import React, { useState } from 'react';
// import './Dashboard.css';

// const initialMedications = [
//   { id: 1, name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM', taken: false },
//   { id: 2, name: 'Metformin', dosage: '850mg', time: '1:00 PM', taken: false },
//   { id: 3, name: 'Paracetamol', dosage: '650mg', time: '10:00 AM & 9:00 PM', taken: false },
//   { id: 4, name: 'Doxycycline', dosage: '100mg', time: '11:00 AM', taken: false },
// ];

// const Dashboard = () => {
//   const [medications, setMedications] = useState(initialMedications);

//   const handleMarkAsTaken = (id) => {
//     const updatedMeds = medications.map((med) =>
//       med.id === id ? { ...med, taken: true } : med
//     );
//     setMedications(updatedMeds);
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">💊 Medication Dashboard</h2>
//       <div className="medications-grid">
//         {medications.map((med) => (
//           <div
//             key={med.id}
//             className={`medication-card ${med.taken ? 'taken' : ''}`}
//           >
//             <h3 className="medication-name">{med.name}</h3>
//             <p className="medication-info">📝 <strong>Dosage:</strong> {med.dosage}</p>
//             <p className="medication-info">⏰ <strong>Time:</strong> {med.time}</p>
//             <div className="action-buttons">
//               <button
//                 className="button mark-taken"
//                 onClick={() => handleMarkAsTaken(med.id)}
//                 disabled={med.taken}
//               >
//                 {med.taken ? 'Taken ✅' : 'Mark as Taken'}
//               </button>
//               <button className="button renewal">Request Renewal</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;












// import React, { useEffect, useState } from 'react';
// import './Dashboard.css';
// import ReminderPopup from './ReminderPopup';

// const medications = [
//   { name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM' },
//   { name: 'Metformin', dosage: '850mg', time: '1:00 PM' },
//   { name: 'Paracetamol', dosage: '650mg', time: '10:00 AM & 9:00 PM' },
//   { name: 'Doxycycline', dosage: '100mg', time: '11:00 AM' },
// ];

// const Dashboard = () => {
//   const [showReminder, setShowReminder] = useState(false);
//   const [snoozed, setSnoozed] = useState(false);

//   // Simulate a reminder every 1 minute
//   useEffect(() => {
//     const reminderTimer = setTimeout(() => {
//       if (!snoozed) {
//         setShowReminder(true);
//       }
//     }, 60000); // 60,000 ms = 1 minute

//     return () => clearTimeout(reminderTimer);
//   }, [snoozed]);

//   const handleTaken = () => {
//     alert('✅ Dose marked as taken!');
//     setShowReminder(false);
//   };

//   const handleMissed = () => {
//     alert('⚠️ Dose marked as missed!');
//     setShowReminder(false);
//   };

//   const handleSnooze = () => {
//     alert('⏳ Snoozed for 10 minutes');
//     setSnoozed(true);
//     setShowReminder(false);
//     setTimeout(() => setSnoozed(false), 10 * 60 * 1000);
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">💊 Medication Dashboard</h2>
//       <div className="medications-grid">
//         {medications.map((med, index) => (
//           <div key={index} className="medication-card">
//             <h3 className="medication-name">{med.name}</h3>
//             <p className="medication-info">📝 <strong>Dosage:</strong> {med.dosage}</p>
//             <p className="medication-info">⏰ <strong>Time:</strong> {med.time}</p>
//             <div className="action-buttons">
//               <button className="button mark-taken">Mark as Taken</button>
//               <button className="button renewal">Request Renewal</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <ReminderPopup
//         isOpen={showReminder}
//         onClose={() => setShowReminder(false)}
//         onTaken={handleTaken}
//         onMissed={handleMissed}
//         onSnooze={handleSnooze}
//       />
//     </div>
//   );
// };

// export default Dashboard;














// import React from 'react';
// import './Dashboard.css';

// const medications = [
//   { name: 'Amoxicillin', dosage: '500mg', time: '8:00 AM' },
//   { name: 'Metformin', dosage: '850mg', time: '1:00 PM' },
//   { name: 'Paracetamol', dosage: '650mg', time: '10:00 AM & 9:00 PM' },
//   { name: 'Doxycycline', dosage: '100mg', time: '11:00 AM' },
// ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">💊 Medication Dashboard</h2>
//       <div className="medications-grid">
//         {medications.map((med, index) => (
//           <div key={index} className="medication-card">
//             <h3 className="medication-name">{med.name}</h3>
//             <p className="medication-info">📝 <strong>Dosage:</strong> {med.dosage}</p>
//             <p className="medication-info">⏰ <strong>Time:</strong> {med.time}</p>
//             <div className="action-buttons">
//               <button className="button mark-taken">Mark as Taken</button>
//               <button className="button renewal">Request Renewal</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











// import React from 'react';
// import './Dashboard.css';


// const medications = [
//   {
//     name: 'Amoxicillin',
//     dosage: '500mg – Twice daily',
//     time: '8:00 AM',
//   },
//   {
//     name: 'Metformin',
//     dosage: '500mg – After lunch',
//     time: '1:00 PM',
//   },
//   {
//     name: 'Paracetamol',
//     dosage: '650mg – Morning & Night',
//     time: '10:00 AM and 9:00 PM',
//   },
//   {
//     name: 'Doxycycline',
//     dosage: '100mg – After breakfast',
//     time: '11:00 AM',
//   },
// ];

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">💊 Medication Dashboard</h2>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
//         {medications.map((med, index) => (
//           <div
//             key={index}
//             className="bg-blue-50 p-4 rounded-xl shadow border-l-4 border-blue-500"
//           >
//             <h3 className="text-xl font-semibold text-blue-800">{med.name}</h3>
//             <p className="text-gray-700 mt-1">📝 <strong>Dosage:</strong> {med.dosage}</p>
//             <p className="text-gray-700 mb-3">⏰ <strong>Time:</strong> {med.time}</p>

//             <div className="flex gap-2">
//               <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
//                 Mark as Taken
//               </button>
//               <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
//                 Request Renewal
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













// // import React from 'react';

// // const Dashboard = () => {
// //   return (
// //     <div className="p-4 bg-white rounded shadow">
// //       <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
// //       <p>Upcoming Medications:</p>
// //       <ul>
// //         <li>Amoxicillin - 8:00 AM</li>
// //         <li>Metformin - 1:00 PM</li>
// //         <li>Paracetamol - 10:00 AM and 9:00 PM</li>
// //         <li>Doxycycline - 11:00 AM</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dashboard;