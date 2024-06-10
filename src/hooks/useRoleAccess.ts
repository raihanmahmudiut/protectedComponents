// src/hooks/useRoleAccess.ts
import { useContext } from 'react';
import { RoleContext } from '../context/RoleContext';

const useRoleAccess = (requiredRoles: string[]) => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRoleAccess must be used within a RoleProvider');
  }
  const { roles } = context;
  return requiredRoles.some(role => roles.includes(role));
};

export default useRoleAccess;
