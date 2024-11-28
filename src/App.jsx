import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css'; 
function App() {
  return (
    <Router>
      <div className='center'>
        <h1>User Management System</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
