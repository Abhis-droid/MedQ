import  { useState } from "react";
import AppointmentForm from "../../components/Patient/AppointmentForm";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";

const PatientAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2025-02-10", time: "10:00 AM", status: "Confirmed" },
    { id: 2, doctor: "Dr. Brown", date: "2025-02-12", time: "2:00 PM", status: "Pending" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleBookAppointment = () => {
    setSelectedAppointment(null);
    setIsModalOpen(true);
  };

  const handleReschedule = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCancel = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
    toast.warn("Appointment Cancelled");
  };

  return (
    <div className=" flex flex-row">
       <Sidebar />
      <div className="p-10 flex flex-col w-300">
      <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
      
      <button 
        onClick={handleBookAppointment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
      >
        + Book New Appointment
      </button>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3">Doctor</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id} className="border-b hover:bg-gray-100">
              <td className="p-3 w-35  pl-8">{appt.doctor}</td>
              <td className="p-3 w-35 pl-8">{appt.date}</td>
              <td className="p-3 w-35 pl-8">{appt.time}</td>
              <td className="p-3 w-35 pl-8">{appt.status}</td>
              <td className="p-3 flex space-x-10">
                <button
                  onClick={() => handleReschedule(appt)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 w-35 ml-35"
                >
                  Reschedule
                </button>
                <button
                  onClick={() => handleCancel(appt.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <AppointmentForm 
          closeModal={() => setIsModalOpen(false)} 
          selectedAppointment={selectedAppointment} 
          setAppointments={setAppointments}
        />
      )}
      </div>  
    </div>
  );
};

export default PatientAppointmentsPage;
