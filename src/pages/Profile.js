
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
