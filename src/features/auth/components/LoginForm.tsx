import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import axios from "axios";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await loginUser(formData);
            console.log("Logged in!", res);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard"); // Redirect to dashboard or another page
             // Assuming the token is in res.data.token
            // TODO: Save token or user data, navigate
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error("Axios error:", err.response?.data);
            } else {
                console.error("Unexpected error:", err);
            }
        }

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
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
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
