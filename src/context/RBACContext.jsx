import { createContext, useContext, useState } from 'react';
import { initialUsers, initialRoles } from '../data/mockData';

const RBACContext = createContext();

export function RBACProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const addRole = (role) => {
    setRoles([...roles, role]);
  };

  const updateRole = (updatedRole) => {
    setRoles(roles.map(role => role.id === updatedRole.id ? updatedRole : role));
  };

  const deleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <RBACContext.Provider value={{
      users,
      roles,
      addUser,
      updateUser,
      deleteUser,
      addRole,
      updateRole,
      deleteRole,
    }}>
      {children}
    </RBACContext.Provider>
  );
}

export function useRBAC() {
  const context = useContext(RBACContext);
  if (!context) {
    throw new Error('useRBAC must be used within a RBACProvider');
  }
  return context;
}