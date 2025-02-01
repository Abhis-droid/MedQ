import './QuickActions.css';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate=useNavigate();
  const actions = [
    { id: 1, label: 'Add Doctor', icon: '🩺', action: () =>navigate("/manage-doctors") },
    { id: 2, label: 'Manage Patients', icon: '👥', action: () => alert('Manage Patients clicked!') },
    { id: 3, label: 'View Requests', icon: '📋', action: () => alert('View Requests clicked!') },
    { id: 4, label: 'Settings', icon: '⚙️', action: () => alert('Settings clicked!') },
  ];

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action) => (
          <button
            key={action.id}
            className="action-button"
            onClick={action.action}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
