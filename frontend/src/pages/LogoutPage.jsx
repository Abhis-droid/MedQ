import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (e.g., token or user data)
    localStorage.removeItem('userToken'); // Adjust based on your session storage
    localStorage.removeItem('userData'); // Optional: If you store additional user data

    // Redirect to login page after logout
    navigate('/');
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Logging Out...</h2>
      <p>Please wait while we redirect you to the login page.</p>
    </div>
  );
};

export default LogoutPage;
