import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import Navbar from "./components/Navbar";
import UsersTable from "./components/UsersTable";
import UserModal from "./components/UserModal";
import RolesTab from "./components/RolesTab";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
      permissions: { canRead: true, canWrite: true, canDelete: false },
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Editor",
      permissions: { canRead: true, canWrite: false, canDelete: false },
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSaveUser = (user) => {
    if (user.id) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );
    } else {
      setUsers((prevUsers) => [...prevUsers, { ...user, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handlePermissionChange = (userId, permission, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, permissions: { ...user.permissions, [permission]: value } }
          : user
      )
    );
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    setShowModal(true);
  };

  const handleEditUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        <Navbar />
        <div className="flex-1 bg-gray-100 p-4 md:p-6">
          <Routes>
            {/* Redirect from root to /users */}
            <Route path="/" element={<Navigate to="/users" />} />
            
            {/* Users Management Route */}
            <Route
              path="/users"
              element={
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg md:text-2xl font-semibold text-gray-800">Users</h1>
                    <button
                      onClick={handleAddUser}
                      className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm md:text-base"
                    >
                      Add User
                    </button>
                  </div>
                  <UsersTable
                    users={users}
                    onPermissionChange={handlePermissionChange}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                  />
                </div>
              }
            />
            {/* Roles Management Route */}
            <Route path="/roles" element={<RolesTab />} />
          </Routes>
        </div>
        {showModal && (
          <UserModal
            user={currentUser}
            onClose={() => setShowModal(false)}
            onSave={handleSaveUser}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
