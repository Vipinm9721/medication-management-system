import React from 'react';
import './MedicineTiming.css';

const MedicineTiming = () => {
  const patientProblem = 'High Fever and Sore Throat';

  const medicines = [
    { name: 'Paracetamol 500mg', dosage: '1 Tablet', timing: 'Morning & Night' },
    { name: 'Amoxicillin 250mg', dosage: '1 Capsule', timing: 'Every 8 Hours' },
    { name: 'Cough Syrup', dosage: '10ml', timing: 'Before Sleep' },
  ];

  return (
    <div className="medicine-container">
      <h2 className="medicine-title">Medicine Timing for: <span className="highlight">{patientProblem}</span></h2>
      <p className="medicine-subtitle">Based on your condition, the doctor has prescribed the following medications:</p>

      <table className="medicine-table">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Dosage</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med, index) => (
            <tr key={index}>
              <td>{med.name}</td>
              <td>{med.dosage}</td>
              <td>{med.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineTiming;
