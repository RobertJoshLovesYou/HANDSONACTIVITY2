import React, { useState, useEffect } from 'react';
import UserForm from './components/userForm';
import UserList from './components/UserList';
import FetchUsers from './components/FetchUsers';
import ClipLoader from 'react-spinners/ClipLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <ClipLoader size={60} color="#66c2c2" />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm />

      {/* New container for side-by-side layout */}
      <div className="user-sections">
        <div className="section">
          <h2>Fetched Users</h2>
          <FetchUsers />
        </div>
        <div className="section">
          <h2>Manually Added Users</h2>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
