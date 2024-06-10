import React, { createContext, ReactNode } from "react";
import { useUsers } from "../hooks/useUsers";

export interface RoleContextType {
	roles: string[];
	login: (userId: number) => void;
	users: { [key: number]: { id: number; roles: string[] } };
}

export const RoleContext = createContext<RoleContextType | undefined>(
	undefined
);

interface RoleProviderProps {
	children: ReactNode;
}

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
	const { currentUser, login, users } = useUsers();

	return (
		<RoleContext.Provider
			value={{ roles: currentUser?.roles || [], login, users }}
		>
			{children}
		</RoleContext.Provider>
	);
};
