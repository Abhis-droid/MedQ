import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = ({ closeModal, selectedAppointment, setAppointments }) => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(selectedAppointment?.doctor || "");
  const [date, setDate] = useState(selectedAppointment ? new Date(selectedAppointment.date) : new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(selectedAppointment?.time || "");

  useEffect(() => {
    // Simulated API call to fetch available doctors
    setTimeout(() => {
      setDoctors(["Dr. Smith", "Dr. Brown", "Dr. Johnson"]);
    }, 1000);
  }, []);

  useEffect(() => {
    // Fetch available time slots based on selected doctor
    if (doctor) {
      const availableSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:45 PM"];
      setTimeSlots(availableSlots);
    }
  }, [doctor]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctor || !date || !selectedTime) return toast.error("All fields are required!");

    const newAppointment = {
      id: selectedAppointment ? selectedAppointment.id : Date.now(),
      doctor,
      date: date.toISOString().split("T")[0], // Format date
      time: selectedTime,
      status: "Confirmed",
    };

    setAppointments((prev) =>
      selectedAppointment
        ? prev.map((appt) => (appt.id === selectedAppointment.id ? newAppointment : appt))
        : [...prev, newAppointment]
    );

    toast.success(selectedAppointment ? "Appointment Rescheduled!" : "Appointment Booked!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{selectedAppointment ? "Reschedule Appointment" : "Book Appointment"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>Select a doctor</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Select Date</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              minDate={new Date()}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Select Time Slot</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>Select a time slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {selectedAppointment ? "Update" : "Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AppointmentForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedAppointment: PropTypes.object,
  setAppointments: PropTypes.func.isRequired,
};

export default AppointmentForm;
