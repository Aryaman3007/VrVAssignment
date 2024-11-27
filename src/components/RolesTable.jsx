import React from "react";

const RolesTable = ({ roles, onPermissionChange }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="p-4 border">Role</th>
          <th className="p-4 border">View Reports</th>
          <th className="p-4 border">Edit Data</th>
          <th className="p-4 border">Manage Users</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td className="p-4 border">{role.name}</td>
            {["viewReports", "editData", "manageUsers"].map((permission) => (
              <td className="p-4 border" key={permission}>
                <input
                  type="checkbox"
                  checked={role.permissions[permission]}
                  onChange={(e) =>
                    onPermissionChange(role.id, permission, e.target.checked)
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolesTable;
