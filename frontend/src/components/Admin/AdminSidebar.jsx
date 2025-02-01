import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { Home, User, Calendar, BarChart, Bell, Settings, Users, ClipboardList, MessageCircle } from "lucide-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-320 bg-gray-900 text-white ${isOpen ? "w-64" : "w-20"} transition-all duration-300 p-4`}> 
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-4 focus:outline-none">
        {isOpen ? "☰ Close" : "☰ Open"}
      </button>
      <nav className="space-y-4">
        <NavItem to="/adminDashboard" icon={<Home size={24} />} label="Dashboard" isOpen={isOpen} />
        <NavItem to="/admin/doctors" icon={<User size={24} />} label="Doctors" isOpen={isOpen} />
        <NavItem to="/admin/patients" icon={<Users size={24} />} label="Patients" isOpen={isOpen} />
        <NavItem to="/admin/appointments" icon={<Calendar size={24} />} label="Appointments" isOpen={isOpen} />
        <NavItem to="/admin/queue" icon={<ClipboardList size={24} />} label="Queue Management" isOpen={isOpen} />
        <NavItem to="/admin/analytics" icon={<BarChart size={24} />} label="Analytics" isOpen={isOpen} />
        <NavItem to="/admin/notifications" icon={<Bell size={24} />} label="Notifications" isOpen={isOpen} />
        <NavItem to="/admin/feedback" icon={<MessageCircle size={24} />} label="Feedback" isOpen={isOpen} />
        <NavItem to="/admin/settings" icon={<Settings size={24} />} label="Settings" isOpen={isOpen} />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label, isOpen }) => (
  <Link to={to} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition">
    {icon}
    {isOpen && <span>{label}</span>}
  </Link>
);

// Props validation using PropTypes
NavItem.propTypes = {
  to: PropTypes.string.isRequired, // Ensures 'to' is a required string
  icon: PropTypes.element.isRequired, // Ensures 'icon' is a required React element
  label: PropTypes.string.isRequired, // Ensures 'label' is a required string
  isOpen: PropTypes.bool.isRequired, // Ensures 'isOpen' is a required boolean
};

export default AdminSidebar;
