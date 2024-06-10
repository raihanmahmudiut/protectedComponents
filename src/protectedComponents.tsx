// src/protectedComponents.ts
import AdminContentComponent from './components/AdminContent';
import GuestContentComponent from './components/GuestContent';
import SuperuserContentComponent from './components/SuperUserContent';
import UserContentComponent from './components/UserContent';
import AdminDashboardComponent from './pages/AdminDashboard';
import GuestDashboardComponent from './pages/GuestDashboard';
import UserDashboardComponent from './pages/UserDashboard';
import withAuthorization from './withAuthorization';

export const AdminDashboard = withAuthorization(['admin'])(AdminDashboardComponent);
export const UserDashboard = withAuthorization(['user', 'admin'])(UserDashboardComponent);
export const GuestDashboard = withAuthorization(['guest', 'user', 'admin'])(GuestDashboardComponent);

// Nested Components
export const AdminContent = withAuthorization(['admin'])(AdminContentComponent);
export const SuperuserContent = withAuthorization(['admin', 'superuser'])(SuperuserContentComponent);
export const UserContent = withAuthorization(['admin','user'])(UserContentComponent);
export const GuestContent = withAuthorization(['admin', 'user','guest'])(GuestContentComponent);
