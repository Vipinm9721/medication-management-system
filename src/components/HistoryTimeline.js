import React from 'react';

const HistoryTimeline = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="font-semibold">Medication History</h3>
      <ul className="list-disc ml-4">
        <li>April 14 - Metformin Taken</li>
        <li>April 13 - Prescription Renewed</li>
      </ul>
    </div>
  );
};

export default HistoryTimeline;