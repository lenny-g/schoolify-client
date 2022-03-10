import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AppProvider";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Appointment } from "../pages/Appointment";
import { Dashboard } from "../pages/Dashboard";
import { AddChild } from "../pages/AddChild";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<Appointment />} />
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children/new" element={<AddChild />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};
