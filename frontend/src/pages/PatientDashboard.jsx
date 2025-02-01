import  { useState, useEffect } from "react";
import Sidebar from "./Patientsub/Sidebar";
//import PatientNav from "../components/Patient/PatientNav";
import Header from "./Patientsub/Headeer";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  //const [notifications, setNotifications] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    // Dummy Data Fetching
    setAppointments([
      { id: 1, doctor: "Dr. Smith", date: "2025-02-05", time: "10:00 AM", department: "Cardiology" },
    ]);
    
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  //const toggleNotifications = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <div className="flex flex-col">
        <Header />
      
      
      <div className="flex flex-row mt-15">
        <Sidebar />
      

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 flex-col  ">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="text-gray-800 text-3xl md:hidden">
              <i className="fas fa-bars"></i>
            </button>
           
          </div>
        </header>

        {/* Notification Section */}
        {/* {isNotificationOpen && (
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <p>{notification.message}</p>
              </div>
            ))}
          </div>
        )} */}

        {/* Dashboard Overview */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6 ">
          <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p><strong>Doctor:</strong> {appointments[0]?.doctor}</p>
            <p><strong>Time:</strong> {appointments[0]?.time}</p>
            <p><strong>Department:</strong> {appointments[0]?.department}</p>
            <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">Reschedule</button>
            <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">Cancel</button>
          </div>

          {/* Queue Status */}
          <h3 className="text-xl font-semibold mt-6">Queue Status</h3>
          <div className="bg-green-100 p-4 rounded-lg">
            <p><strong>Current Position:</strong> 5</p>
            <p><strong>Estimated Wait Time:</strong> 15 minutes</p>
          </div>

          {/* Prescription Reminders */}
          <h3 className="text-xl font-semibold mt-6">Prescription Reminders</h3>
          <div className="bg-purple-100 p-4 rounded-lg">
            <ul>
              <li>Medication: 20mg - Morning, Evening</li>
              <li>Medication: 10mg - After lunch</li>
            </ul>
          </div>
        </div>

        {/* Medical Records Summary */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <h3 className="text-xl font-semibold">Medical Records</h3>
          <p><strong>Recent Visits:</strong> 2025-01-20 - Dr. Smith - Diagnosis: High BP</p>
          <p><strong>Ongoing Medications:</strong> 20mg Med - Morning</p>
          <p><strong>Allergies:</strong> None</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-6">
          <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">Book Appointment</button>
          <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">Check Queue</button>
          <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600">View Prescriptions</button>
          <button className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600">Submit Feedback</button>
        </div>

        {/* Health Insights */}
        <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
          <h3 className="text-xl font-semibold">Health Insights and Recommendations</h3>
          <p>Based on your latest prescriptions, here are some tips:</p>
          <ul>
            <li>Increase water intake</li>
            <li>Take a daily walk</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
