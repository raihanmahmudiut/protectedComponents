import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, GuestContent, UserContent } from '../protectedComponents';


const GuestDashboard: React.FC = () => {
  return (
    <div>
      <h1>Guest Dashboard</h1>
          <GuestContent />
          <UserContent />
          <AdminContent />
      <Link to="/admin">Go to Admin Dashboard</Link>
      <Link to="/user">Go to User Dashboard</Link>
    </div>
  );
};

export default GuestDashboard;
