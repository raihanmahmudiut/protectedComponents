import React from 'react';
import useRoleAccess from '../hooks/useRoleAccess';

const DynamicContent: React.FC = () => {
  const hasDynamicRoleAccess = useRoleAccess(['dynamicRole']);
  const hasGuestAccess = useRoleAccess(['guest', 'user', 'admin']);

  return (
    <div>
      <h2>Dynamic Content</h2>
      {hasDynamicRoleAccess && <div>Content for users with dynamic role</div>}
      {hasGuestAccess && <div>Content for guests, users, or admins</div>}
      {!hasDynamicRoleAccess && !hasGuestAccess && <div>No access to dynamic content</div>}
    </div>
  );
};

export default DynamicContent;