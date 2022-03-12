import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AppProvider";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Appointment } from "../pages/Appointment";
import { Dashboard } from "../pages/Dashboard";
import { AddChild } from "../pages/AddChild";
import { ViewChildren } from "../pages/ViewChildren";
import { ViewAppointments } from "../pages/ViewAppointments";
import { AbsenceRequest } from "../pages/AbsenceRequest";
import { StudentInfo } from "../pages/StudentInfo";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children/new" element={<AddChild />} />
          <Route path="/children/view" element={<ViewChildren />} />
          <Route path="/children/view/:studentId" element={<StudentInfo />} />
          <Route path="/appointment/new" element={<Appointment />} />
          <Route path="/appointment/view" element={<ViewAppointments />} />
          <Route path="/absenceRequest/new" element={<AbsenceRequest />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};
