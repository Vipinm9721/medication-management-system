
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Profile.css';


const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const db = getDatabase();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const profileRef = ref(db, "users/" + user.uid);
        onValue(profileRef, (snapshot) => {
          const data = snapshot.val();
          setProfile(data);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [auth]);

  if (loading) return <div>Loading profile...</div>;

  if (!profile) return <div>No profile data available.</div>;

  return (
    <div className="profile">
      <h2>Hi, {profile.name || "User"}</h2>
      <p><strong>Name:</strong> {profile.name || "N/A"}</p>
      <p><strong>Email:</strong> {profile.email || "N/A"}</p>
      <p><strong>Allergies:</strong> {profile.allergies || "Fever"}</p>
      <p><strong>Conditions:</strong> {profile.currentConditions || "Not Good"}</p>
      <p><strong>Doctor Contact:</strong> {profile.doctorContact || "1234567890"}</p>
    </div>
  );
};

export default Profile;















// import React, { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase';

// function Profile() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const docRef = doc(db, "users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setProfile(docSnap.data());
//         }
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (!profile) return <p className="text-center mt-6">Loading profile...</p>;

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-6">
//       <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//     </div>
//   );
// }

// export default Profile;










// import React from 'react';
// import './Profile.css';

// const Profile = () => {
//   const userData = JSON.parse(localStorage.getItem('userData'));

//   return (
//     <div className="p-4 bg-white rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Profile</h2>
//       {userData ? (
//         <>
//           <p><strong>Name:</strong> {userData.name}</p>
//           <p><strong>Email:</strong> {userData.email}</p>
//           <p><strong>Allergies:</strong> Penicillin</p>
//           <p><strong>Conditions:</strong> Hypertension</p>
//         </>
//       ) : (
//         <p>No profile data available.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;










// // import React from 'react';
// // import './Profile.css';

// // const Profile = () => {
// //   return (
// //     <div className="profile-container">
// //       <h2 className="profile-title">User Profile</h2>
// //       <div className="profile-info">
// //         <p><strong>Allergies:</strong> Penicillin</p>
// //         <p><strong>Conditions:</strong> Hypertension</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
