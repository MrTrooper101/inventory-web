import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
        // TODO: connect with login API
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login to Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="text-sm text-right">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
                >
                    Sign In
                </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Register here
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
