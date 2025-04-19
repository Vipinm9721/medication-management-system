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
