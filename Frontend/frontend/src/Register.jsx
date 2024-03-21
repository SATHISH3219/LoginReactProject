import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import CSS file

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      console.log(response.data);
      setMessage(response.data.message);
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="container"> {/* Apply container style */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="label">Username:</label> {/* Apply label style */}
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input" // Apply input style
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Register</button> {/* Apply button style */}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;