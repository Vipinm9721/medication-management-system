import React from 'react';

const RenewalRequest = () => {
  const handleRequest = () => {
    alert("Renewal requested");
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <h3 className="font-semibold">Prescription Renewal</h3>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRequest}>Request Renewal</button>
    </div>
  );
};

export default RenewalRequest;