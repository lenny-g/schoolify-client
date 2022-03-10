import Container from "@mui/material/Container";

import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

export const ViewChildren = () => {
  return (
    <Container component="main" maxWidth="xs">
      <ParentNavBar />
    </Container>
  );
};
