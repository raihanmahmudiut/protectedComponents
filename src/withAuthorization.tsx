import React from 'react';
import { useRoles } from './context/useRoles';

const withAuthorization = (allowedRoles: string[]) => (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { roles } = useRoles();

    const hasAccess = allowedRoles.some((role) => roles.includes(role));

    if (!hasAccess) {
      return <div>You can't view this content. You need to have one of these roles to view the content: {allowedRoles.join(', ')}</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
