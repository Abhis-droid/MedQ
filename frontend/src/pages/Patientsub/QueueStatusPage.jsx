import  { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "./Sidebar";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const QueueStatusPage = () => {
  const [queues, setQueues] = useState([
    { doctor: "Dr. Smith", totalPatients: 15, currentPosition: 4, avgWaitTime: 10 },
    { doctor: "Dr. Brown", totalPatients: 20, currentPosition: 6, avgWaitTime: 12 },
    { doctor: "Dr. Johnson", totalPatients: 10, currentPosition: 3, avgWaitTime: 8 },
  ]);
  
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Smith");

  // Simulate real-time updates (Polling every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setQueues((prevQueues) =>
        prevQueues.map((queue) =>
          queue.doctor === selectedDoctor
            ? { ...queue, currentPosition: Math.max(1, queue.currentPosition - 1) }
            : queue
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedDoctor]);

  const selectedQueue = queues.find((q) => q.doctor === selectedDoctor);

  const queueData = {
    labels: ["Total Patients", "Your Position", "Completed"],
    datasets: [
      {
        label: "Queue Status",
        data: [
          selectedQueue?.totalPatients || 0,
          selectedQueue?.currentPosition || 0,
          (selectedQueue?.totalPatients || 0) - (selectedQueue?.currentPosition || 0),
        ],
        backgroundColor: ["#007bff", "#ffcc00", "#28a745"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-row">
        <Sidebar />
   
    <div className="p-6 flex flex-col w-320">
      <h2 className="text-2xl font-semibold mb-4">Queue Status</h2>

      {/* Doctor Selection */}
      <div className="mb-4">
        <label className="font-medium">Select Doctor:</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {queues.map((q) => (
            <option key={q.doctor} value={q.doctor}>
              {q.doctor}
            </option>
          ))}
        </select>
      </div>

      {/* Queue Info */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">{selectedDoctor}s Queue</h3>
        <p><strong>Total Patients:</strong> {selectedQueue?.totalPatients}</p>
        <p><strong>Your Position:</strong> {selectedQueue?.currentPosition}</p>
        <p><strong>Estimated Wait Time:</strong> {selectedQueue?.currentPosition * selectedQueue?.avgWaitTime} minutes</p>
      </div>

      {/* Queue Visualization */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-270 h-180">
        <h3 className="text-lg font-semibold mb-4">Queue Visualization</h3>
        <Bar data={queueData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </div>
    </div>
    </div>
  );
};

export default QueueStatusPage;
