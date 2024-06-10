// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './pages/LoginPage';
import { AdminDashboard, GuestDashboard, UserDashboard } from './protectedComponents';
import PublicPage from './pages/PublicPage';

const App: React.FC = () => (
  <RoleProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute roles={['admin']} element={<AdminDashboard />} />} />
        <Route path="/user" element={<ProtectedRoute roles={['user', 'admin']} element={<UserDashboard />} />} />
        <Route path="/guest" element={<ProtectedRoute roles={['guest', 'user', 'admin']} element={<GuestDashboard />} />} />
        <Route path="/public" element={<PublicPage />} />
        <Route path="/access-denied" element={<div>Access Denied</div>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </RoleProvider>
);

export default App;
