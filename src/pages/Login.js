// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { auth, db } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Check if user profile exists
//       const userRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(userRef);
//       if (!docSnap.exists()) {
//         await setDoc(userRef, {
//           name: "", // optional default value
//           email: user.email,
//           uid: user.uid
//         });
//       }
//       navigate("/profile");
//     } catch (error) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto mt-8 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-semibold mb-4">Login</h2>
//       <form onSubmit={handleLogin}>
//         <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//         <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700" type="submit">Login</button>
//       </form>
//       {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
//     </div>
//   );
// }

// export default Login;









// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Register.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
    } catch (error) {
      console.error('Login Error:', error.message);
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Login</h2>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-input" />
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-input" />
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
