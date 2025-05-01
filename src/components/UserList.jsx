import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';
import './UserList.css';

const UserList = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => dispatch(deleteUser(user.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
