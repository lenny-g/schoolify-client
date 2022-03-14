import Container from "@mui/material/Container";

import { AbsenceForm } from "../components/AbsenceForm";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

export const ParentsAbsenceRequestForm = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentNavBar />
      <AbsenceForm />
    </Container>
  );
};
