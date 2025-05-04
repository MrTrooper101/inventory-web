// auth/authService.ts
import axios from "axios";

const API_BASE = "https://localhost:7149/api/Auth"; // replace with your actual API URL

export const registerUser = async (data: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    contactNumber?: string;
    companyName: string;
    companyAddress?: string;
}) => {
    const response = await axios.post(`${API_BASE}/register`, data);
    return response.data;
};

export const loginUser = async (data: {
    email: string;
    password: string;
}) => {
    const response = await axios.post(`${API_BASE}/login`, data);
    return response.data;
};

export const setPassword = async (data: {
    token: string;
    password: string;
    confirmPassword: string;
}) => {
    const response = await axios.post(`${API_BASE}/set-password`, data);
    return response.data;
}