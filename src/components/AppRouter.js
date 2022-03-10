import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Appointment } from "../pages/Appointment";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
};
