import { 
  LayoutDashboard, 
  Package, 
  Target, 
  Tv, 
  Brain, 
  BarChart3, 
  Settings, 
  FileText,
  TrendingUp,
  Users
} from 'lucide-react';
import './SideMenu.css';

interface SideMenuProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const SideMenu = ({ activeView, onViewChange }: SideMenuProps) => {

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard', badge: null },
    { id: 'vendor', icon: <Package size={20} />, label: 'Vendor Central', badge: null },
    { id: 'advertising', icon: <Target size={20} />, label: 'Advertising', badge: '4' },
    { id: 'dsp', icon: <Tv size={20} />, label: 'DSP', badge: null },
    { id: 'amc', icon: <Brain size={20} />, label: 'AMC', badge: null },
  ];

  const secondaryItems = [
    { id: 'analytics', icon: <BarChart3 size={20} />, label: 'Analytics', badge: null },
    { id: 'reports', icon: <FileText size={20} />, label: 'Reports', badge: null },
    { id: 'insights', icon: <TrendingUp size={20} />, label: 'Insights', badge: 'New' },
    { id: 'audiences', icon: <Users size={20} />, label: 'Audiences', badge: null },
  ];

  return (
    <aside className="side-menu">
      <div className="side-menu-content">
        {/* Logo Section */}
        <div className="menu-logo">
          <img src="/logos/haleon.png" alt="Haleon" className="haleon-logo" />
        </div>

        {/* Main Navigation */}
        <nav className="menu-nav">
          <div className="menu-section">
            <div className="menu-section-title">Main</div>
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`menu-item ${activeView === item.id ? 'active' : ''}`}
                onClick={() => onViewChange(item.id)}
              >
                <span className="menu-item-icon">{item.icon}</span>
                <span className="menu-item-label">{item.label}</span>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </button>
            ))}
          </div>

          <div className="menu-section">
            <div className="menu-section-title">Tools</div>
            {secondaryItems.map(item => (
              <button
                key={item.id}
                className={`menu-item ${activeView === item.id ? 'active' : ''}`}
                onClick={() => onViewChange(item.id)}
              >
                <span className="menu-item-icon">{item.icon}</span>
                <span className="menu-item-label">{item.label}</span>
                {item.badge && (
                  <span className={`menu-badge ${item.badge === 'New' ? 'badge-new' : ''}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Settings at Bottom */}
        <div className="menu-footer">
          <button
            className={`menu-item ${activeView === 'settings' ? 'active' : ''}`}
            onClick={() => onViewChange('settings')}
          >
            <span className="menu-item-icon"><Settings size={20} /></span>
            <span className="menu-item-label">Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
