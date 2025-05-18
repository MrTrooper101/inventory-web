import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './features/auth/components/LoginForm';
import RegisterForm from './features/auth/components/RegisterForm';
import SetPasswordForm from './features/auth/components/SetPasswordForm';
import Dashboard from './dashboard/Dashboard';
import DashboardLayout from './dashboard/DashboardLayout';
import ProtectedRoute from './routes/protectedRoutes';
import Products from './features/inventory/products/components/Products';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/set-password" element={<SetPasswordForm />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory/products" element={<Products />} />
          {/* <Route path="/inventory/categories" element={<Categories />} />
          <Route path="/inventory/stock" element={<StockLevels />} />
          <Route path="/orders/purchase" element={<PurchaseOrders />} />
          <Route path="/orders/sales" element={<SalesOrders />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Route>

        {/* Fallback route (optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
