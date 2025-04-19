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
