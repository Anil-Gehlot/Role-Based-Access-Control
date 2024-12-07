import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser, hasPermission } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Welcome, {currentUser.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasPermission('users.view') && (
          <Link
            to="/users"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600">View and manage system users</p>
          </Link>
        )}
        
        {hasPermission('roles.manage') && (
          <Link
            to="/roles"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">Role Management</h3>
            <p className="text-gray-600">Manage roles and permissions</p>
          </Link>
        )}
      </div>
    </div>
  );
}