import Container from "@mui/material/Container";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";

export const About = () => {
  return (
    <Container component="main" maxWidth="xs">
      <PublicNavBar />
      <h1>About</h1>
    </Container>
  );
};
