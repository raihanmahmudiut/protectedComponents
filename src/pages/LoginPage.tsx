import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoles } from '../context/useRoles';


const LoginPage: React.FC = () => {
  const { login, users } = useRoles();
  const [userId, setUserId] = useState<number>(1);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(userId);

    const user = users[userId - 1];
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
    <div className="login-container">
      <h1>Login Page</h1>
      <label htmlFor="user-select">Select User Role:</label>
      <select
        id="user-select"
        onChange={(e) => setUserId(Number(e.target.value))}
        value={userId}
      >
        <option value={1}>Admin</option>
        <option value={2}>User</option>
        <option value={3}>Guest</option>
      </select>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
