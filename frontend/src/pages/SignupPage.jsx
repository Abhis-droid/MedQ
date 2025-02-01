import  { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Navbar from "../components/Navbar";
import "../styles/auth.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Validate if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Proceed with signup (mock behavior here)
    if (email && password) {
      localStorage.setItem("userRole", role);
      alert("Account Created Successfully");
      navigate('/login');
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="auth-container">
      {/* <Navbar /> */}
      <div className="auth-content">
        <div className="auth-left">
          <h1>Welcome to MyTurn!</h1>
          <p>Sign up to manage your appointments and access patient insights.</p>
        </div>
        <div className="auth-right">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="auth-btn" >
              Sign Up
            </button>
            <p>
              Already have an account? <a href="/">Login here</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
