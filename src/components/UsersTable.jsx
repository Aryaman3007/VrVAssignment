import React from "react";
import { FaCheck, FaTimes, FaEdit, FaTrashAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const UsersTable = ({ users, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-xs md:text-sm font-semibold uppercase">Name</th>
            <th className="px-4 py-2 text-left text-xs md:text-sm font-semibold uppercase">Role</th>
            <th className="px-4 py-2 text-center text-xs md:text-sm font-semibold uppercase">View Reports</th>
            <th className="px-4 py-2 text-center text-xs md:text-sm font-semibold uppercase">Edit Data</th>
            <th className="px-4 py-2 text-center text-xs md:text-sm font-semibold uppercase">Manage Users</th>
            <th className="px-4 py-2 text-center text-xs md:text-sm font-semibold uppercase">Status</th>
            <th className="px-4 py-2 text-center text-xs md:text-sm font-semibold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}
            >
              {/* Name */}
              <td className="px-4 py-2 text-xs md:text-sm font-medium text-gray-800">{user.name}</td>
              {/* Role */}
              <td className="px-4 py-2 text-xs md:text-sm font-medium text-gray-800">{user.role}</td>
              {/* Permissions */}
              <td className="px-4 py-2 text-center">
                {user.permissions.viewReports ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
              </td>
              <td className="px-4 py-2 text-center">
                {user.permissions.editData ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
              </td>
              <td className="px-4 py-2 text-center">
                {user.permissions.manageUsers ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
              </td>
              {/* Status */}
              <td className="px-4 py-2 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              {/* Actions */}
              <td className="px-4 py-2 text-center flex justify-center space-x-4">
                <Tooltip title="Edit User" arrow>
                  <button
                    onClick={() => onEdit(user.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                </Tooltip>
                <Tooltip title="Delete User" arrow>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
