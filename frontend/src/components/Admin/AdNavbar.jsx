import { Link } from 'react-router-dom';
import './AdNavbar.css';

const AdNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        MyTurn
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/adminDashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/manage-doctors">Manage Doctors</Link>
        </li>
        <li>
          <Link to="/manage-patients">Manage Patients</Link>
        </li>
        <li>
          <Link to="/Queue-manage">Queue Management</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <span className="profile-name">Admin</span>
        <div className="profile-dropdown">
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdNavbar;
