import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, GuestContent, UserContent } from '../protectedComponents';
import "./dashboard.css";
const UserDashboard: React.FC = () => {
  return (
    <div className="dashboard">
          <h1>User Dashboard</h1>
          <AdminContent />
      <UserContent />
      <GuestContent />
      <div className="dashboard-links"> <Link to="/admin" className="dashboard-link">Go to Admin Dashboard</Link>
      <Link to="/guest" className="dashboard-link">Go to Guest Dashboard</Link></div>
     
    </div>
  );
};

export default UserDashboard;
