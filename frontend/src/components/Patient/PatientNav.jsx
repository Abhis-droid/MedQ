import { Link } from 'react-router-dom';
import './AdNavbar.css';

const PatientNav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        MyTurn
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/patient-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Appointment-book">Book Appointment</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <span className="profile-name">Patient</span>
        <div className="profile-dropdown">
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default PatientNav;
