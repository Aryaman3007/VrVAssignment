import React from "react";

const RolesTable = ({ roles, onPermissionChange }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="p-4 border">Role</th>
          <th className="p-4 border">Can Read</th>
          <th className="p-4 border">Can Write</th>
          <th className="p-4 border">Can Delete</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td className="p-4 border">{role.name}</td>
            {["canRead", "canWrite", "canDelete"].map((permission) => (
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
