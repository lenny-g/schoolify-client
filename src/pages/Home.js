import Container from "@mui/material/Container";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import schoolify from "../assets/img/logo.png";

export const Home = () => {
  return (
    <Container component="main" maxWidth="xs">
      <PublicNavBar />
      <Container sx={{ alignItems: "center", mt: "7rem" }}>
        <img src={schoolify} />
      </Container>
    </Container>
  );
};
