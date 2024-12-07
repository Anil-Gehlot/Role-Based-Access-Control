import { createContext, useContext, useState } from 'react';
import { initialUsers, initialRoles } from '../data/mockData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    const user = initialUsers.find(
      u => u.email === email && u.password === password && u.status === 'active'
    );
    
    if (user) {
      const userRole = initialRoles.find(r => r.id === user.role);
      setCurrentUser({
        ...user,
        permissions: userRole.permissions
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const hasPermission = (permission) => {
    return currentUser?.permissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      logout,
      hasPermission,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}