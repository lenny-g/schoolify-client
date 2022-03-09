import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";
import { AddChild } from "../pages/AddChild";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addChild" element={<AddChild />} />
    </Routes>
  );
};
