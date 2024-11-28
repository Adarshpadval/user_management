import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost/user_management_backend/api/get_user_by_id.php?id=${id}`);
      if (response.data.success) {
        setUser(response.data.data); 
      } else {
        console.error('User not found');
      }
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching user:', error);
      setLoading(false); 
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost/user_management_backend/api/update_user.php`, user);
      navigate('/'); 
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name || ''} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={user.email || ''} onChange={handleInputChange} />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={user.dob || ''} onChange={handleInputChange} />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
