import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import './AdminStats.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminStats = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Patients',
        data: [200, 150, 300, 400,250, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="admin-stats">
      <div className="stat-cards">
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p>1500</p>
        </div>
        <div className="stat-card">
          <h3>Total Doctors</h3>
          <p>25</p>
        </div>
        <div className="stat-card">
          <h3>Appointments Today</h3>
          <p>50</p>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <p>5</p>
        </div>
      </div>
      <div className="chart-container" style={{height:"400px",width:"700px"}}>
        <h3>Monthly Patient Trends</h3>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default AdminStats;
