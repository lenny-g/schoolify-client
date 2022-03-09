import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AppProvider";
import Dashboard from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )} 
    </Routes>
  );
};
