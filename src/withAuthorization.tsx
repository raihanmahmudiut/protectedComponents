import useRoleAccess from './hooks/useRoleAccess';

const withAuthorization = (allowedRoles: string[]) => (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const hasAccess = useRoleAccess(allowedRoles);
   

    

    if (!hasAccess) {
      return <div>You can't view this content. You need to have one of these roles to view the content: {allowedRoles.join(', ')}</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
