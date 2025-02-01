import { useState } from 'react';
import AdNavbar from '../../components/Admin/AdNavbar';
import Footer from '../../components/Admin/Footer';
import './ManagePatient.css';

const ManagePatient = () => {
  // Sample patient data
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 32, gender: 'Male', date: '2025-01-24', status: 'Active' },
    { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', date: '2025-01-23', status: 'Inactive' },
    { id: 3, name: 'Emily Johnson', age: 45, gender: 'Female', date: '2025-01-22', status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Handle delete patient
  const handleDelete = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle status filter
  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  // Filtered and searched patients
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' || patient.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="manage-patients-page">
      <AdNavbar />
      <div className="page-content">
        <h2>Manage Patients</h2>
        {/* Search and Filter */}
        <div className="search-filter-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select value={filterStatus} onChange={handleFilter}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        {/* Patient Table */}
        <table className="patients-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Appointment Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.date}</td>
                  <td>{patient.status}</td>
                  <td>
                    <button onClick={() => alert(`Editing patient ${patient.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(patient.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No patients found.</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Add Patient Button */}
        <button className="add-patient-btn" onClick={() => alert('Add Patient Modal')}>
          Add Patient
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ManagePatient;
