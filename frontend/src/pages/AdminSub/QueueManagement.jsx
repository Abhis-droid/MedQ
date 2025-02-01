import  { useState } from "react";
import AdNavbar from "../../components/Admin/AdNavbar";
import Footer from "../../components/Admin/Footer";
import "./QueueManagement.css";

const QueueManagement = () => {
  const [patients, setPatients] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Add a new patient to the queue
  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
    setUpdates([...updates, `Added patient ${newPatient.name}`]);
  };

  // Update the status of a patient
  const handleAction = (id, newStatus) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
    const patient = patients.find((p) => p.id === id);
    setUpdates([...updates, `${patient.name} moved to ${newStatus}`]);
  };

  return (
    <div>
      <AdNavbar />
      <div className="queue-management-container">
        {/* Queue Statistics */}
        <div className="queue-statistics">
          <div className="stat-box">
            <h3>Waiting</h3>
            <p>{patients.filter((p) => p.status === "Waiting").length}</p>
          </div>
          <div className="stat-box">
            <h3>In Consultation</h3>
            <p>
              {patients.filter((p) => p.status === "In Consultation").length}
            </p>
          </div>
          <div className="stat-box">
            <h3>Completed</h3>
            <p>{patients.filter((p) => p.status === "Completed").length}</p>
          </div>
        </div>

        {/* Add Patient Form */}
        <form
          className="add-patient-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newPatient = {
              id: formData.get("id"),
              name: formData.get("name"),
              appointmentTime: formData.get("appointmentTime"),
              status: "Waiting",
            };
            handleAddPatient(newPatient);
            e.target.reset();
          }}
        >
          <input type="text" name="id" placeholder="Patient ID" required />
          <input type="text" name="name" placeholder="Patient Name" required />
          <input type="time" name="appointmentTime" required />
          <button type="submit">Add Patient</button>
        </form>

        {/* Queue Table */}
        <table className="queue-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Appointment Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.status}</td>
                <td>{patient.appointmentTime}</td>
                <td>
                  {patient.status === "Waiting" && (
                    <button
                      onClick={() => handleAction(patient.id, "In Consultation")}
                    >
                      Move to Consultation
                    </button>
                  )}
                  {patient.status === "In Consultation" && (
                    <button
                      onClick={() => handleAction(patient.id, "Completed")}
                    >
                      Mark as Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Real-Time Updates */}
        <div className="real-time-updates">
          <h3>Real-Time Updates</h3>
          <ul>
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        </div>

        {/* Patient Details Modal */}
        {selectedPatient && (
          <div className="modal">
            <div className="modal-content">
              <h3>Patient Details</h3>
              <p>
                <strong>ID:</strong> {selectedPatient.id}
              </p>
              <p>
                <strong>Name:</strong> {selectedPatient.name}
              </p>
              <p>
                <strong>Status:</strong> {selectedPatient.status}
              </p>
              <p>
                <strong>Appointment Time:</strong>{" "}
                {selectedPatient.appointmentTime}
              </p>
              <button onClick={() => setSelectedPatient(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QueueManagement;
