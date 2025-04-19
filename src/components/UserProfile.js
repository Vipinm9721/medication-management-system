// import React, { useState } from 'react';
// import './UserProfile.css';

// const UserProfile = () => {
//   const [formData, setFormData] = useState({
//     name: '', age: '', gender: '',
//     allergies: '', conditions: '',
//     doctorName: '', doctorPhone: '', doctorEmail: '',
//     prescription: null,
//     error: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
//     if (file && validTypes.includes(file.type)) {
//       setFormData((prev) => ({ ...prev, prescription: file, error: '' }));
//     } else {
//       setFormData((prev) => ({ ...prev, error: 'Only PDF, JPG, and PNG formats are allowed.' }));
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>🧑‍⚕️ User Profile & Health Info</h2>

//       <div className="section">
//         <h3>👤 Personal Info</h3>
//         <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div className="section">
//         <h3>🩺 Health Information</h3>
//         <textarea name="allergies" placeholder="Allergies" value={formData.allergies} onChange={handleChange} />
//         <textarea name="conditions" placeholder="Current Conditions" value={formData.conditions} onChange={handleChange} />
//       </div>

//       <div className="section">
//         <h3>👨‍⚕️ Doctor Contact</h3>
//         <input name="doctorName" type="text" placeholder="Doctor Name" value={formData.doctorName} onChange={handleChange} />
//         <input name="doctorPhone" type="tel" placeholder="Phone Number" value={formData.doctorPhone} onChange={handleChange} />
//         <input name="doctorEmail" type="email" placeholder="Email" value={formData.doctorEmail} onChange={handleChange} />
//       </div>

//       <div className="section">
//         <h3>📄 Prescription Upload</h3>
//         <label className="upload-box">
//           Drag & drop or click to upload (PDF/JPG/PNG)
//           <input type="file" accept=".pdf,.jpg,.png" onChange={handleFileUpload} />
//         </label>
//         {formData.prescription && <p className="success-msg">Uploaded: {formData.prescription.name}</p>}
//         {formData.error && <p className="error-msg">{formData.error}</p>}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;









import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, 'users/' + user.uid);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setProfileData(snapshot.val());
        }
      });
    }
  }, []);

  if (!profileData) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {profileData.name}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
      <p><strong>Allergies:</strong> {profileData.allergies}</p>
      <p><strong>Conditions:</strong> {profileData.conditions}</p>
      <p><strong>Doctor Contact:</strong> {profileData.doctorContact}</p>
    </div>
  );
};

export default UserProfile;
