import React, { useState } from "react";

const UserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    user || {
      name: "",
      role: "",
      status: "Active",
      permissions: { viewReports: false, editData: false, manageUsers: false },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      permissions: { ...prev.permissions, [name]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Permissions</label>
            <div className="space-y-2">
              <label>
                <input
                  type="checkbox"
                  name="viewReports"
                  checked={formData.permissions.viewReports}
                  onChange={handlePermissionChange}
                />
                <span className="ml-2">Can Read</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="editData"
                  checked={formData.permissions.editData}
                  onChange={handlePermissionChange}
                />
                <span className="ml-2">Can Write</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="manageUsers"
                  checked={formData.permissions.manageUsers}
                  onChange={handlePermissionChange}
                />
                <span className="ml-2">Can Delete</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
