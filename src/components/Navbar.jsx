import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      {/* Top Navbar for smaller screens */}
      <div className="flex items-center justify-between px-4 py-3 sm:hidden">
        <h1 className="text-xl font-bold">RBAC Dashboard</h1>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar for larger screens and toggleable menu */}
      <div
        className={`sm:w-64 sm:flex sm:flex-col ${
          isOpen ? 'flex flex-col' : 'hidden'
        } bg-gray-800 sm:block`}
      >
        <h1 className="text-xl font-bold p-4 border-b border-gray-700 hidden sm:block">
          RBAC Dashboard
        </h1>
        <nav className="flex-1 p-4">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/roles"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`
            }
          >
            Roles
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
