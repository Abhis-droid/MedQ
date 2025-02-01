import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
//import AuthProvider from "./components/AuthContext";
//import Navbar from "./components/Navbar"; // Assuming you have a Navbar component
import ManageDoctors from "./pages/AdminSub/ManageDoctors";
import QueueManagement from "./pages/AdminSub/QueueManagement";
import ManagePatient from "./pages/AdminSub/ManagePatient";
import LogoutPage from './pages/LogoutPage';
import ProfilePage from "./pages/ProfilePage"; 
import AppointmentBooking from "./pages/Patientsub/AppointmentBooking";

const App = () => {

  return (

      <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
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
