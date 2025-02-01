import  { useState, useEffect } from "react";

const AdminAppo= () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    status: "Pending",
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    // Fetch appointments from backend (Dummy data for now)
    setAppointments([
      { id: 1, patient: "John Doe", doctor: "Dr. Smith", date: "2025-02-05", status: "Confirmed" },
      { id: 2, patient: "Jane Doe", doctor: "Dr. Brown", date: "2025-02-06", status: "Pending" },
    ]);
  }, []);

  // Handle Search
  const filteredAppointments = appointments.filter(
    (appt) =>
      appt.patient.toLowerCase().includes(search.toLowerCase()) ||
      appt.doctor.toLowerCase().includes(search.toLowerCase())
  );

  // Handle New Appointment Addition
  const addAppointment = () => {
    if (newAppointment.patient && newAppointment.doctor && newAppointment.date) {
      setAppointments([...appointments, { id: Date.now(), ...newAppointment }]);
      setNewAppointment({ patient: "", doctor: "", date: "", status: "Pending" });
    }
  };

  // Handle Editing Appointment
  const updateAppointment = () => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === editingAppointment.id ? editingAppointment : appt
      )
    );
    setEditingAppointment(null);
  };

  // Handle Delete Appointment
  const deleteAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(appointments.filter((appt) => appt.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Manage Appointments</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by patient or doctor..."
          className="w-full p-2 mb-4 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Add New Appointment Form */}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Patient Name"
            className="p-2 border rounded w-1/4"
            value={newAppointment.patient}
            onChange={(e) => setNewAppointment({ ...newAppointment, patient: e.target.value })}
          />
          <input
            type="text"
            placeholder="Doctor Name"
            className="p-2 border rounded w-1/4"
            value={newAppointment.doctor}
            onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
          />
          <input
            type="date"
            className="p-2 border rounded w-1/4"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={addAppointment}
          >
            Add
          </button>
        </div>

        {/* Appointments Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Patient</th>
                <th className="py-3 px-4 text-left">Doctor</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appt) => (
                  <tr key={appt.id} className="hover:bg-gray-100">
                    <td className="py-3 px-4">{appt.patient}</td>
                    <td className="py-3 px-4">{appt.doctor}</td>
                    <td className="py-3 px-4">{appt.date}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        appt.status === "Confirmed" ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      {appt.status}
                    </td>
                    <td className="py-3 px-4 flex justify-center gap-2">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={() => setEditingAppointment(appt)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => deleteAppointment(appt.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-3 text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Appointment Modal */}
      {editingAppointment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Edit Appointment</h3>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={editingAppointment.patient}
              onChange={(e) => setEditingAppointment({ ...editingAppointment, patient: e.target.value })}
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={editingAppointment.doctor}
              onChange={(e) => setEditingAppointment({ ...editingAppointment, doctor: e.target.value })}
            />
            <input
              type="date"
              className="w-full p-2 border rounded mb-2"
              value={editingAppointment.date}
              onChange={(e) => setEditingAppointment({ ...editingAppointment, date: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={updateAppointment}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setEditingAppointment(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppo;
