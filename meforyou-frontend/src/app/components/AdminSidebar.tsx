import { Link, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';
import {
    Layout, Package, Car, Home, Users, MessageSquare,
    Image as ImageIcon, Settings2, Calendar
} from 'lucide-react';

export function AdminSidebar() {
    const location = useLocation();
    const { user, isAuthenticated } = useAuth();

    const isDashboardRoute = location.pathname.startsWith('/dashboard') ||
        location.pathname.startsWith('/content-manager') ||
        location.pathname.startsWith('/bookings') ||
        location.pathname.startsWith('/profile');

    if (!isAuthenticated || !isDashboardRoute || (user?.role !== 'admin' && user?.role !== 'manager')) {
        return null;
    }

    const isActive = (path: string) => {
        if (path.includes('?')) {
            return location.pathname + location.search === path;
        }
        return location.pathname === path && !location.search;
    };

    return (
        <>
            <div className="admin-sidebar-hover-zone">
                <div className="admin-sidebar shadow-lg">
                    <div className="sidebar-header p-4 border-bottom">
                        <h5 className="mb-0 fw-bold text-primary">MITS ADMIN</h5>
                        <small className="text-muted">Management Hub</small>
                    </div>
                    <div className="sidebar-links p-3">
                        <div className="sidebar-category mt-2 mb-2 px-3">
                            <small className="text-muted fw-bold">MAIN</small>
                        </div>
                        <Link to="/dashboard" className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''} text-decoration-none`}>
                            <Layout size={18} />
                            <span>Overview</span>
                        </Link>
                        <Link to="/bookings" className={`sidebar-link ${isActive('/bookings') ? 'active' : ''} text-decoration-none`}>
                            <Package size={18} />
                            <span>Manage Bookings</span>
                        </Link>

                        <div className="sidebar-category mt-4 mb-2 px-3">
                            <small className="text-muted fw-bold">SERVICES</small>
                        </div>
                        <Link to="/content-manager?tab=services" className={`sidebar-link ${isActive('/content-manager?tab=services') ? 'active' : ''} text-decoration-none`}>
                            <Package size={18} />
                            <span>Events & Core</span>
                        </Link>
                        <Link to="/content-manager?tab=cars" className={`sidebar-link ${isActive('/content-manager?tab=cars') ? 'active' : ''} text-decoration-none`}>
                            <Car size={18} />
                            <span>Car Fleet</span>
                        </Link>
                        <Link to="/content-manager?tab=properties" className={`sidebar-link ${isActive('/content-manager?tab=properties') ? 'active' : ''} text-decoration-none`}>
                            <Home size={18} />
                            <span>Properties</span>
                        </Link>

                        <div className="sidebar-category mt-4 mb-2 px-3">
                            <small className="text-muted fw-bold">CONTENT</small>
                        </div>
                        <Link to="/content-manager?tab=team" className={`sidebar-link ${isActive('/content-manager?tab=team') ? 'active' : ''} text-decoration-none`}>
                            <Users size={18} />
                            <span>Team Members</span>
                        </Link>
                        <Link to="/content-manager?tab=partners" className={`sidebar-link ${isActive('/content-manager?tab=partners') ? 'active' : ''} text-decoration-none`}>
                            <Users size={18} />
                            <span>Partners List</span>
                        </Link>
                        <Link to="/content-manager?tab=testimonials" className={`sidebar-link ${isActive('/content-manager?tab=testimonials') ? 'active' : ''} text-decoration-none`}>
                            <MessageSquare size={18} />
                            <span>Testimonials</span>
                        </Link>
                        <Link to="/content-manager?tab=carousel" className={`sidebar-link ${isActive('/content-manager?tab=carousel') ? 'active' : ''} text-decoration-none`}>
                            <ImageIcon size={18} />
                            <span>Carousel Items</span>
                        </Link>

                        <div className="sidebar-category mt-4 mb-2 px-3">
                            <small className="text-muted fw-bold">SYSTEM</small>
                        </div>
                        <Link to="/profile" className={`sidebar-link ${isActive('/profile') ? 'active' : ''} text-decoration-none`}>
                            <Settings2 size={18} />
                            <span>Platform Settings</span>
                        </Link>

                        <div className="mt-4 pt-4 px-3 border-top">
                            <div className="p-3 bg-primary-soft rounded-4 text-center">
                                <h6 className="small fw-bold mb-1">Status</h6>
                                <div className="d-flex align-items-center justify-content-center gap-1">
                                    <div className="rounded-circle bg-success" style={{ width: '6px', height: '6px' }}></div>
                                    <span className="small text-success fw-bold">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .admin-sidebar-hover-zone {
          position: fixed;
          left: 0;
          top: 85px;
          height: calc(100vh - 85px);
          width: 40px;
          z-index: 2000;
          transition: width 0.3s ease;
        }

        .admin-sidebar {
          position: fixed;
          left: -280px;
          top: 85px;
          height: calc(100vh - 85px);
          width: 280px;
          background: white;
          z-index: 2001;
          overflow-y: auto;
          border-right: 1px solid #eee;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .admin-sidebar-hover-zone:hover .admin-sidebar {
          left: 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 15px;
          border-radius: 10px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 4px;
          transition: 0.2s;
        }

        .sidebar-link:hover {
          background: #f8fafc;
          color: var(--primary);
        }

        .sidebar-link.active {
          background: #FE5D37;
          color: white;
          box-shadow: 0 4px 12px rgba(254, 93, 55, 0.2);
        }

        .sidebar-category small {
          font-size: 11px;
          letter-spacing: 1px;
        }

        .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
        
        /* Thin Scrollbar */
        .admin-sidebar::-webkit-scrollbar {
          width: 4px;
        }
        .admin-sidebar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }

        /* Hover Hint */
        .admin-sidebar-hover-zone::after {
          content: 'ADMIN';
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-weight: 800;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--primary);
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .admin-sidebar-hover-zone:hover::after {
          opacity: 0;
        }
      `}</style>
        </>
    );
}
