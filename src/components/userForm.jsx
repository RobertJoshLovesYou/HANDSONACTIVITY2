import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice';
import ClipLoader from 'react-spinners/ClipLoader';
import './UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = async () => {
    if (name.trim()) {
      setLoading(true);
      await dispatch(addUser({ name }));
      setName('');
      setError('');
      setLoading(false);
    } else {
      setError('Please enter a valid name.');
    }
  };

  return (
    <div className="user-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAdd} disabled={!name.trim() || loading}>
        {loading ? <ClipLoader size={20} color="#ffffff" /> : 'Add User'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UserForm;
