import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import Container from "@mui/material/Container";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import schoolify from "../assets/img/logo.png";

export const Home = () => {
  return (
    <Container component="main" width="100%">
      <PublicNavBar />
      <Container>
        <Box sx={{ display: "flex" }}>
          <img src={schoolify} height="500px" />
        </Box>
        <Box>
          <Button variant="contained" fullWidth href="https://google.com">
            Parents Login
          </Button>
          <Button variant="contained" fullWidth href="https://wikipedia.com">
            Teachers Login
          </Button>
        </Box>
      </Container>
    </Container>
  );
};
