import  { useState } from "react";
import { Download,  Clock } from "lucide-react";

const PrescriptionsPage = () => {
  const [prescriptions] = useState([
    {
      id: 1,
      doctor: "Dr. Smith",
      date: "2025-02-01",
      medicines: [
        { name: "Paracetamol", dosage: "500mg", schedule: "Morning & Night", refillIn: "5 days" },
        { name: "Amoxicillin", dosage: "250mg", schedule: "Afternoon", refillIn: "7 days" },
      ],
    },
    {
      id: 2,
      doctor: "Dr. Johnson",
      date: "2025-01-28",
      medicines: [
        { name: "Ibuprofen", dosage: "200mg", schedule: "Morning", refillIn: "3 days" },
      ],
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredPrescriptions = prescriptions.filter((p) => {
    return (
      (selectedDoctor === "" || p.doctor === selectedDoctor) &&
      (selectedDate === "" || p.date === selectedDate)
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Prescriptions</h2>

      {/* Filters */}
      <div className="mb-4 flex space-x-4">
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="p-2 border rounded w-1/3"
        >
          <option value="">All Doctors</option>
          {[...new Set(prescriptions.map((p) => p.doctor))].map((doctor) => (
            <option key={doctor} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded w-1/3"
        />
      </div>

      {/* Prescriptions List */}
      {filteredPrescriptions.map((prescription) => (
        <div key={prescription.id} className="bg-white shadow-lg p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {prescription.doctor} - {prescription.date}
            </h3>
            <button className="bg-blue-600 text-white px-3 py-1 rounded flex items-center">
              <Download size={16} className="mr-2" /> Download
            </button>
          </div>
          <div className="mt-3">
            {prescription.medicines.map((med, index) => (
              <div key={index} className="flex justify-between p-2 border-b">
                <span>{med.name} ({med.dosage})</span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {med.schedule} 
                  <span className="ml-4 text-red-500">Refill in {med.refillIn}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrescriptionsPage;
