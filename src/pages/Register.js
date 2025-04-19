// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from '../firebase';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         email,
//         uid: user.uid
//       });
//       setMessage("Registration successful. Please log in.");
//     } catch (error) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="register-container p-4 max-w-md mx-auto mt-8 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-semibold mb-4">Register</h2>
//       <form onSubmit={handleRegister}>
//         <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
//         <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//         <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700" type="submit">Register</button>
//       </form>
//       {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
//     </div>
//   );
// }

// export default Register;
















import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      setMessage("Registration successful. Please log in.");
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="w-full p-2 mb-2 border"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className="w-full p-2 mb-2 border"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 mb-2 border"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white w-full py-2" type="submit">
            Register
          </button>
        </form>
        {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}

export default Register;

