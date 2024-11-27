import React, { useState } from "react";
import RolesTable from "./RolesTable";

const RolesTab = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      permissions: { viewReports: true, editData: true, manageUsers: true },
    },
    {
      id: 2,
      name: "Manager",
      permissions: { viewReports: true, editData: true, manageUsers: false },
    },
    {
      id: 3,
      name: "Employee",
      permissions: { viewReports: true, editData: false, manageUsers: false },
    },
  ]);

  const handlePermissionChange = (roleId, permission, value) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? { ...role, permissions: { ...role.permissions, [permission]: value } }
          : role
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Roles</h1>
      <RolesTable roles={roles} onPermissionChange={handlePermissionChange} />
    </div>
  );
};

export default RolesTab;