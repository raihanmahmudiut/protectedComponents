
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useRoleAccess from './hooks/useRoleAccess';

const ProtectedRoute: React.FC<{ roles: string[], element: React.ReactElement }> = ({ roles, element }) => {
  const hasAccess = useRoleAccess(roles);

  if (!hasAccess) {
    return <Navigate to="/access-denied" />;
  }

  return element;
};

export default ProtectedRoute;
