import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const menuItem =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white";

  const activeItem = "bg-cyan-500 text-white";

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-64 bg-linear-to-b from-blue-900 via-teal-700 to-cyan-600 text-white shadow-lg">

        <div className="flex items-center gap-3 p-6 border-b border-white/20">
          <div>
            <h1 className="text-lg font-semibold">Claim Consultant</h1>
            <p className="text-xs text-gray-200">Admin Dashboard</p>
          </div>
        </div>

        <nav className="p-4 space-y-2">

          <Link
            to="/admin/contact"
            className={`${menuItem} ${
              location.pathname === "/admin/contact" ? activeItem : ""
            }`}
          >
            📞 Contacts
          </Link>

          <Link
            to="/admin/query"
            className={`${menuItem} ${
              location.pathname === "/admin/query" ? activeItem : ""
            }`}
          >
            📋 Queries
          </Link>

        </nav>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
};

export default Dashboard;
