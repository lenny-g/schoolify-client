import Container from "@mui/material/Container";

import { AddChildForm } from "../components/AddChild/AddChildForm";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

export const AddChild = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentNavBar />
      <AddChildForm />
    </Container>
  );
};
