import { AbsenceForm } from "../components/AbsenceForm";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import Container from "@mui/material/Container";

export const ParentsAbsenceRequestForm = () => {
  return (
    <Container component="main" maxWidth="md">
      <AbsenceForm />
    </Container>
  );
};
