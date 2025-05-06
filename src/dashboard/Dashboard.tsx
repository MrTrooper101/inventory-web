import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
            <p className="text-gray-600">You are now logged in and ready to manage your inventory.</p>
            {/* Add widgets, cards, tables, etc. here later */}
        </div>
    );
};

export default Dashboard;
