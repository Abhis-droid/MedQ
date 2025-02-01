import  { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Navbar from "../components/Navbar";
import "../styles/auth.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // Default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    

    if (email === "admin@example.com" && password === "admin123" && role === "admin") {
      navigate("/adminDashboard");
    } else if (email === "doctor@example.com" && password === "doctor123" && role === "doctor") {
      navigate("/doctor-dashboard");
    } else if(email === "patient@example.com" && password === "patient123" && role === "patient"){
      navigate("/patient-dashboard");
    }
    else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="auth-container">
      {/* <Navbar /> */}
      <div className="auth-content">
        <div className="auth-left">
          <h1 className="text-2x1">Welcome Back!</h1>
          <p>Log in to continue managing your appointments and tracking insights.</p>
        </div>
        <div className="auth-right">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
            <button type="submit" className="auth-btn">
              Login
            </button>
            <p>
              Don’t have an account? <a href="/signup">Sign up here</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
