import PatientNavbar from "../components/PatientNav";


const PatientDashboard = () => {
  return ( <div>
    <PatientNavbar />
    <div className="dashboard-container">
      <h1>Welcome to the Patient Dashboard</h1>
      <p>Select an option from the navigation bar to get started.</p>
    </div>
  </div>
  )
}

export default PatientDashboard