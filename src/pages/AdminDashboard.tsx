import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, SuperuserContent } from '../protectedComponents';
import "./dashboard.css";
const AdminDashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <AdminContent />
      <SuperuserContent />
      <div className="dashboard-links">
        <Link to="/user" className="dashboard-link">Go to User Dashboard</Link>
        <Link to="/guest" className="dashboard-link">Go to Guest Dashboard</Link>
        <Link to="/public" className="dashboard-link">Public page</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
