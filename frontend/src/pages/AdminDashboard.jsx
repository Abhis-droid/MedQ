import AdNavbar from '../components/Admin/AdNavbar';
import AdminStats from '../components/Admin/AdminStats';
import RecentActivities from '../components/Admin/RecentActivity';
import QuickActions from '../components/Admin/QuickActions';
import AdminSidebar from '../components/Admin/AdminSidebar';
//import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard flex flex-col  ">
      {/* Navbar */}
      <AdNavbar />
      <div className='flex flex-row gap-50'>
      <AdminSidebar />

      {/* Main Content */}
      <div className="dashboard-content flex flex-col mt-3 ml-10">
        {/* Admin Stats */}
        <AdminStats />

        {/* Recent Activities */}
        <div className="activities-section">
          <h2>Recent Activities</h2>
          <RecentActivities />
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h2>Quick Actions</h2>
          <QuickActions />
        </div>
        {/* Footer */}
      <footer className="dashboard-footer ">
        <p>© 2025 MyTurn OP Tracking System</p>
      </footer>
      </div>

      
    </div>
    </div>
  );
};

export default AdminDashboard;
