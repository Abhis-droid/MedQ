import  { useState } from 'react';
import './ManageDoctors.css';
import AdNavbar from '../../components/Admin/AdNavbar';

const ManageDoctors = () => {
  // State to hold doctors' data
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', available: true },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', available: false },
    { id: 3, name: 'Dr. Mark Lee', specialty: 'Orthopedic', available: true },
  ]);

  // State to manage form inputs
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialty: '',
    available: true,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission and add new doctor
  const handleAddDoctor = (e) => {
    e.preventDefault();
    setDoctors([...doctors, { id: Date.now(), ...newDoctor }]);
    setNewDoctor({ name: '', specialty: '', available: true });
  };

  // Function to handle doctor deletion
  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    
    <div className="manage-doctors">
        <AdNavbar />
      <h2>Manage Doctors</h2>
      <div className="doctor-list">
        <h3>Doctors List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.available ? 'Available' : 'Not Available'}</td>
                <td>
                  <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-doctor-form mt-20 w-150 content-center">
        <h4>Add New Doctor</h4>
        <form onSubmit={handleAddDoctor}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newDoctor.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Specialty:
            <input
              type="text"
              name="specialty"
              value={newDoctor.specialty}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Availability:
            <select
              name="available"
              value={newDoctor.available}
              onChange={handleInputChange}
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </label>
          <button type="submit">Add Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default ManageDoctors;
