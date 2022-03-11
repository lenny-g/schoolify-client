import Container from "@mui/material/Container";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";

export const Home = () => {
  return (
    <Container component="main" maxWidth="xs">
      <PublicNavBar />
      <h1>Home</h1>
    </Container>
  );
};
