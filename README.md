# **Role-Based Access Control (RBAC) UI**

This project implements a **Role-Based Access Control (RBAC)** User Interface for managing users, roles, and permissions. It provides a secure and intuitive admin dashboard for administrators to handle role-based workflows efficiently.

---

## **Predefined Users and Roles**

The application starts with three predefined roles: **Admin**, **Editor**, and **Viewer**. Each role has specific permissions:

1. **Admin:**
   - Can add, delete, and manage users.
   - Can add roles, edit permissions for users, and delete them.

2. **Editor:**
   - Can only edit permissions of the users.
   - Cannot add or delete users.

3. **Viewer:**
   - Can only view the user data.
   - Cannot add, delete, or edit users or permissions.

---

### **Login Credentials**

Use the following credentials to log in with different roles:

- **Admin:**
  - **ID:** `admin@example.com`
  - **Password:** `admin123`
  
- **Editor:**
  - **ID:** `editor@example.com`
  - **Password:** `editor123`
  
- **Viewer:**
  - **ID:** `viewer@example.com`
  - **Password:** `viewer123`

---

## **Features**

### **1. User Management**
- Admin can add, edit, and delete users.
- Admin can assign roles to users and toggle their active/inactive status.
- Editor can edit permissions for existing users.
- Viewer can view user data but cannot make changes.

### **2. Role Management**
- Admin can create, edit, and delete roles.
- Permissions (e.g., Read, Write, Delete) can be dynamically assigned to roles.
- Role-based views ensure restricted access for Editor and Viewer roles.


---

## **Tech Stack**

- **Frontend:** React.js with functional components and hooks
- **State Management:** Context API
- **Styling:** Tailwind CSS 
- **API Simulation:** custom mock data
- **Icons and Components:** React Icons

---

## **Setup Instructions**

**Copy the following commands and run in your Terminal**
   ```bash
   git clone https://github.com/Anil-Gehlot/Role-Based-Access-Control
   cd Role-Based-Access-Control
   npm install
   npm run dev
   ```


## **Live Demo**

Experience the application in action here:  
**[https://vrv-security-rbac-assignment.netlify.app/login](https://vrv-security-rbac-assignment.netlify.app/login)**

