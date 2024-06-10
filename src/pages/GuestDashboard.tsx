import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, GuestContent, UserContent } from '../protectedComponents';
import "./dashboard.css";

const GuestDashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Guest Dashboard</h1>
          <GuestContent />
          <UserContent />
      <AdminContent />
      <div className="dashboard-links"><Link to="/admin" className="dashboard-link">Go to Admin Dashboard</Link>
        <Link to="/user" className="dashboard-link">Go to User Dashboard</Link>
        <Link to="/public" className="dashboard-link">Public page</Link>
      </div>
      
    </div>
  );
};

export default GuestDashboard;
