import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ChevronDown, ChevronRight } from "react-feather";

const DashboardLayout: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section));
    };
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Inventory</h2>
                <nav className="space-y-3">
                    <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Dashboard
                    </Link>

                    {/* Inventory */}
                    <div>
                        <button
                            onClick={() => toggleSection("inventory")}
                            className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                        >
                            <span>Inventory</span>
                            {openSection === "inventory" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        {openSection === "inventory" && (
                            <div className="pl-4 mt-2 space-y-2">
                                <Link to="/inventory/products" className="block text-gray-600 hover:text-blue-500">
                                    Products
                                </Link>
                                <Link to="/inventory/categories" className="block text-gray-600 hover:text-blue-500">
                                    Categories
                                </Link>
                                <Link to="/inventory/stock" className="block text-gray-600 hover:text-blue-500">
                                    Stock Levels
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Orders */}
                    <div>
                        <button
                            onClick={() => toggleSection("orders")}
                            className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                        >
                            <span>Orders</span>
                            {openSection === "orders" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        {openSection === "orders" && (
                            <div className="pl-4 mt-2 space-y-2">
                                <Link to="/orders/purchase" className="block text-gray-600 hover:text-blue-500">
                                    Purchase Orders
                                </Link>
                                <Link to="/orders/sales" className="block text-gray-600 hover:text-blue-500">
                                    Sales Orders
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Relations */}
                    <div>
                        <button
                            onClick={() => toggleSection("relations")}
                            className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                        >
                            <span>Relations</span>
                            {openSection === "relations" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        {openSection === "relations" && (
                            <div className="pl-4 mt-2 space-y-2">
                                <Link to="/suppliers" className="block text-gray-600 hover:text-blue-500">
                                    Suppliers
                                </Link>
                                <Link to="/customers" className="block text-gray-600 hover:text-blue-500">
                                    Customers
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Static Links */}
                    <Link to="/reports" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Reports
                    </Link>
                    <Link to="/settings" className="block text-gray-700 hover:text-blue-600 font-medium">
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
