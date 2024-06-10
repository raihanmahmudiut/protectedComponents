// src/components/NestedComponent.tsx
import React from "react";
import useRoleAccess from "../hooks/useRoleAccess";

const NestedComponent: React.FC = () => {
	const hasAdminAccess = useRoleAccess(["admin"]);
	const hasUserAccess = useRoleAccess(["user", "admin"]);

	return (
		<div>
			<h2>Nested Component</h2>
			{hasAdminAccess && <div>Admin specific nested content</div>}
			{hasUserAccess && <div>User specific nested content</div>}
			{!hasAdminAccess && !hasUserAccess && (
				<div>No access to nested component</div>
			)}
		</div>
	);
};

export default NestedComponent;
