import React from 'react';
import { Link } from 'react-router-dom';
import { AdminContent, SuperuserContent } from '../protectedComponents';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminContent />
      <SuperuserContent />
      <Link to="/user">Go to User Dashboard</Link>
      <Link to="/guest">Go to Guest Dashboard</Link>
    </div>
  );
};

export default AdminDashboard;
