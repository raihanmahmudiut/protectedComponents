import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoles } from '../context/useRoles';

const LoginPage: React.FC = () => {
  const { login, users } = useRoles();
  console.log("Log => | file: LoginPage.tsx:7 | users:", users)
  const [userId, setUserId] = useState<number>(1);
  console.log("Log => | file: LoginPage.tsx:8 | userId:", userId)
  const navigate = useNavigate();

  const handleLogin = () => {
    login(userId);

    const user = users[userId-1];
    console.log("Log => | file: LoginPage.tsx:14 | user:", user)
    if (user.roles.includes('admin')) {
      navigate('/admin');
    } else if (user.roles.includes('user')) {
      navigate('/user');
    } else if (user.roles.includes('guest')) {
      navigate('/guest');
    } else {
      navigate('/access-denied');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label htmlFor="user-select">Select User Role:</label>
          <select id="user-select" onChange={(e) => {
              setUserId(Number(e.target.value))
              console.log("Log => | file: LoginPage.tsx:8 | userId:", userId)
              console.log("Log => | file: LoginPage.tsx:7 | users:", users)
      }}>
        <option value={1}>Admin</option>
        <option value={2}>User</option>
        <option value={3}>Guest</option>
      </select>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
