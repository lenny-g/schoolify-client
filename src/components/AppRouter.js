import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AppProvider";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { Appointment } from "../pages/Appointment";
import { Dashboard } from "../pages/Dashboard";
import { AddChild } from "../pages/AddChild";
import { ViewChildren } from "../pages/ViewChildren";
import { ViewAppointments } from "../pages/ViewAppointments";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />

      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children/new" element={<AddChild />} />
          <Route path="/children/view" element={<ViewChildren />} />
          <Route path="/appointment/new" element={<Appointment />} />
          <Route path="/appointment/view" element={<ViewAppointments />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};
