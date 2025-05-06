import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Inventory</h2>
                <nav className="space-y-3">
                    <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">
                        Dashboard
                    </Link>
                    <Link to="/inventory" className="block text-gray-700 hover:text-blue-600">
                        Inventory
                    </Link>
                    <Link to="/settings" className="block text-gray-700 hover:text-blue-600">
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
