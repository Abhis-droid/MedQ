import  { useState } from "react";
import PatientNav from "../components/PatientNav";
import "./Appointment.css";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [availableDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialty: "Dermatology" },
    { id: 3, name: "Dr. Lee", specialty: "Pediatrics" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment booked successfully!");
    setFormData({ patientName: "", doctor: "", date: "", time: "", notes: "" });
  };

  return (
    <div>
      <PatientNav />
      
      <div className="appointment-booking-container">
      <h2>Book an Appointment</h2>
    <form onSubmit={handleSubmit} className="appointment-form">
      <div className="form-group">
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label>Select Doctor:</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Select a Doctor --</option>
          {availableDoctors.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name} - {doc.specialty}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Appointment Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Appointment Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Notes:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Additional notes (optional)"
        ></textarea>
      </div>
      <button type="submit" className="book-appointment-button">
        Book Appointment
      </button>
    </form>
  </div></div>
    
  );
};

export default AppointmentBooking;
