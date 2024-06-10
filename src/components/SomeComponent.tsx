import React from 'react';
import useRoleAccess from '../hooks/useRoleAccess';

const SomeComponent: React.FC = () => {
  const hasAdminAccess = useRoleAccess(['admin']);
  const hasUserAccess = useRoleAccess(['user', 'admin']);
  const hasGuestAccess = useRoleAccess(['guest', 'user', 'admin']);

  return (
    <div>
      <h2>Some Component</h2>
      {hasAdminAccess && <div>Admin specific content</div>}
      {hasUserAccess && <div>User specific content</div>}
      {hasGuestAccess && <div>Guest specific content</div>}
      {!hasGuestAccess && !hasUserAccess && !hasAdminAccess && <div>No access</div>}
    </div>
  );
};

export default SomeComponent;
