import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { setPassword } from "../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SetPasswordForm: React.FC = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPasswordForm] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await setPassword({ token: token || "", password, confirmPassword });
            if (res.status !== 200) {
                console.log("Registered!", res);
            }
            // TODO: Navigate to login or dashboard
        } catch (err: unknown) {
            const errorMessage = (err as { response?: { data?: string } })?.response?.data || "Something went wrong.";
            console.error("Password setup error:", errorMessage);
            setError(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Set Your Password</h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {/* New Password */}
                    <div className="mb-4 relative">
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                            value={password}
                            onChange={(e) => setPasswordForm(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute top-[37px] right-3 text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6 relative">
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPassword}
                            className="absolute top-[37px] right-3 text-gray-500"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Set Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SetPasswordForm;
