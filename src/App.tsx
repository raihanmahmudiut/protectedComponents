
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import { useRoles } from './context/useRoles';
import LoginPage from './pages/LoginPage';
import { AdminDashboard, GuestDashboard, UserDashboard } from './protectedComponents';

const ProtectedRoute: React.FC<{ roles: string[], element: React.ReactElement }> = ({ roles, element }) => {
  const { roles: userRoles } = useRoles();
  const hasAccess = roles.some(role => userRoles.includes(role));
  return hasAccess ? element : <Navigate to="/access-denied" />;
};

const App: React.FC = () => (
  <RoleProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute roles={['admin']} element={<AdminDashboard />} />} />
        <Route path="/user" element={<ProtectedRoute roles={['user', 'admin']} element={<UserDashboard />} />} />
        <Route path="/guest" element={<ProtectedRoute roles={['guest', 'user', 'admin']} element={<GuestDashboard />} />} />
        <Route path="/access-denied" element={<div>Access Denied</div>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </RoleProvider>
);

export default App;
