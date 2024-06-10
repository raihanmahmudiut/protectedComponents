
import { useEffect, useState } from 'react';

interface User {
    id: number;
    roles: string[];
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        // Mock fetching user data
        const fetchedUsers: User[] = [
            { id: 1, roles: ['admin'] },
            { id: 2, roles: ['user'] },
            { id: 3, roles: ['guest'] },
        ];
        setUsers(fetchedUsers);
    }, []);

    const login = (userId: number) => {
        const user = users.find((u) => u.id === userId) || null;
        setCurrentUser(user);
    };

    return { users, currentUser, login };
};
