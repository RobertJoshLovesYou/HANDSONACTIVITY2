import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import { ClipLoader } from 'react-spinners';

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="centered">
        <ClipLoader size={40} color="#000000" />
      </div>
    );
  }

  if (status === 'failed') return <p>Failed to load users.</p>;

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default FetchUsers;
