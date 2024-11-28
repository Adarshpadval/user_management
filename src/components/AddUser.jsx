import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    createBy: 'admin',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost/user_management_backend/api/create_user.php', user);
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input name="name" placeholder="Name" type='text' required onChange={handleChange} />
      <input name="email" placeholder="Email" type='email' required onChange={handleChange} />
      <input name="password" placeholder="Password" required type="password" onChange={handleChange} />
      <input name="dob" placeholder="DOB" type="date" required onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
