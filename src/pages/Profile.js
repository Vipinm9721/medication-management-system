import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <p className="text-center mt-6">Loading profile...</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
}

export default Profile;










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
