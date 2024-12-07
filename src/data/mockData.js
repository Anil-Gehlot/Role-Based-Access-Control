export const initialUsers = [
  { 
    id: 1, 
    name: 'Anil Gehlot', 
    email: 'admin@example.com', 
    password: 'admin123', // In a real app, this would be hashed
    role: 'admin', 
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Harsh', 
    email: 'editor@example.com', 
    password: 'editor123',
    role: 'editor', 
    status: 'active' 
  },
  { 
    id: 3, 
    name: 'Lokesh', 
    email: 'viewer@example.com', 
    password: 'viewer123',
    role: 'viewer', 
    status: 'active' 
  },
];

export const initialRoles = [
  {
    id: 'admin',
    name: 'Administrator',
    permissions: ['users.view', 'users.create', 'users.edit', 'users.delete', 'roles.manage'],
  },
  {
    id: 'editor',
    name: 'Editor',
    permissions: ['users.view', 'users.edit'],
  },
  {
    id: 'viewer',
    name: 'Viewer',
    permissions: ['users.view'],
  },
];

export const availablePermissions = [
  { id: 'users.view', name: 'View Users' },
  { id: 'users.create', name: 'Create Users' },
  { id: 'users.edit', name: 'Edit Users' },
  { id: 'users.delete', name: 'Delete Users' },
  { id: 'roles.manage', name: 'Manage Roles' },
];