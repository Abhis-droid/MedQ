import './RecentAct.css';

const RecentActivity = () => {
    const activities = [
      { id: 1, description: 'New patient registered: Alice Brown', time: '2 hours ago' },
      { id: 2, description: 'Dr. John added a new appointment', time: '3 hours ago' },
      { id: 3, description: 'Appointment canceled: Robert', time: 'Yesterday' },
      { id: 4, description: 'System maintenance scheduled', time: '2 days ago' },
    ];
  
    return (
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <p className="activity-desc">{activity.description}</p>
              <span className="activity-time">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentActivity;
