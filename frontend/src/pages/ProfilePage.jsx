import  { useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
  });

  //const navigate = useNavigate();

  // Fetch user data from localStorage or API (simulate with localStorage here)
  // useEffect(() => {
  //   const storedUserData = JSON.parse(localStorage.getItem('userData')); // Fetch from localStorage
  //   if (storedUserData) {
  //     setUserData(storedUserData);
  //   } else {
  //     // Redirect to login if no user data is found
  //     navigate('/');
  //   }
  // }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the updated user data (simulate saving to localStorage here)
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <div className="profile-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleChange}
            placeholder="Enter your role"
          />
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
