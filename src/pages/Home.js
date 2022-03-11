import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import Container from "@mui/material/Container";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import schoolify from "../assets/img/logo.png";

export const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <PublicNavBar />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", m: "2rem" }}>
          <img src={schoolify} height="500px" />
        </Box>
        <Box sx={{ mb: "2rem" }}>
          <Button variant="contained" fullWidth href="https://google.com">
            Parents
          </Button>
        </Box>
        <Box>
          <Button variant="contained" fullWidth href="https://wikipedia.com">
            Teachers
          </Button>
        </Box>
      </Container>
    </Container>
  );
};
