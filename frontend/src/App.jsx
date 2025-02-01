import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminDashboardPage from "./pages/AdminDashboard";
import DoctorDashboardPage from "./pages/DoctorDashboard";
import PatientDashboardPage from "./pages/PatientDashboard";
//import AuthProvider from "./components/AuthContext";
//import Navbar from "./components/Navbar"; // Assuming you have a Navbar component
import ManageDoctors from "./pages/ManageDoctors";
import QueueManagement from "./pages/QueueManagement";
import ManagePatient from "./pages/ManagePatient";
import LogoutPage from './pages/LogoutPage';
import ProfilePage from "./pages/ProfilePage"; 
import AppointmentBooking from "./pages/AppointmentBooking";

const App = () => {

  return (

      <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/adminDashboard" element={<AdminDashboardPage />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />
      <Route path="/patient-dashboard" element={<PatientDashboardPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/manage-doctors" element={<ManageDoctors />} />
      <Route path="/Queue-manage" element={<QueueManagement />}/>
      <Route path="/manage-patients" element={<ManagePatient />}/>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Appointment-Book" element={<AppointmentBooking />}/>
    </Routes>
  </Router>
   
  );
};

export default App;
