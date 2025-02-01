import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { Home, Calendar, ClipboardList, Settings, FileText ,MessageCircle } from "lucide-react"; // Import icons from Lucide

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-full bg-gray-900 text-white ${isOpen ? "w-64" : "w-20"} transition-all duration-300 p-4`}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-4 focus:outline-none">
        {isOpen ? "☰ Close" : "☰ Open"}
      </button>
      <nav className="space-y-4">
        <NavItem to="/patient-dashboard" icon={<Home size={24} />} label="Home" isOpen={isOpen} />
        <NavItem to="/Appointment-Book" icon={<Calendar size={24} />} label="Appointments" isOpen={isOpen} />
        <NavItem to="/patient/queue" icon={<ClipboardList size={24} />} label="Queue Status" isOpen={isOpen} />
        <NavItem to="/patient/prescriptions" icon={<FileText size={24} />} label="Prescriptions" isOpen={isOpen} />
        <NavItem to="/patient/feedback" icon={<MessageCircle size={24} />} label="Feedback" isOpen={isOpen} />
        <NavItem to="/patient/settings" icon={<Settings size={24} />} label="Settings" isOpen={isOpen} />
        {/* <NavItem to="#" icon={<Bell size={24} />} label="Notifications" isOpen={isOpen} /> */}
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

export default Sidebar;
