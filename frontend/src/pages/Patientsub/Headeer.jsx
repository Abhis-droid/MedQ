import { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md z-50">
      {/* Logo / Title */}
      <h1 className="text-lg font-bold">MyTurn - Patient Dashboard</h1>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-6">
        {/* Notifications Bell */}
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3 {/* Example notification count */}
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-3">
              <h3 className="font-semibold text-sm">Notifications</h3>
              <ul className="text-sm">
                <li className="py-1 border-b">Your appointment is confirmed.</li>
                <li className="py-1 border-b">Your queue number is updated.</li>
                <li className="py-1">Prescription reminder: Take your medication.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative">
          <button onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <User size={28} />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-3">
              <h3 className="font-semibold text-sm">John Doe</h3>
              <ul className="text-sm">
                <li className="py-1 border-b hover:bg-gray-100 p-2 cursor-pointer">View Profile</li>
                <li className="py-1 border-b hover:bg-gray-100 p-2 cursor-pointer">Settings</li>
                <li className="py-1 hover:bg-red-100 p-2 cursor-pointer flex items-center" onClick={onLogout}>
                  <LogOut size={16} className="mr-2" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Props Validation
Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
