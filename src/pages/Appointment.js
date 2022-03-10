import Container from "@mui/material/Container";

import { AppointmentForm } from "../components/AppointmentForm/AppointmentForm";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

export const Appointment = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentNavBar />
      <AppointmentForm />
    </Container>
  );
};
