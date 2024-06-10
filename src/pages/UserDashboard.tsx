import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, GuestContent, UserContent } from '../protectedComponents';

const UserDashboard: React.FC = () => {
  return (
    <div>
          <h1>User Dashboard</h1>
          <AdminContent />
      <UserContent />
      <GuestContent />
      <Link to="/admin">Go to Admin Dashboard</Link>
      <Link to="/guest">Go to Guest Dashboard</Link>
    </div>
  );
};

export default UserDashboard;
