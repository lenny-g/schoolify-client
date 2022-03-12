import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import Container from "@mui/material/Container";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import schoolify from "../assets/img/logo.png";

export const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <PublicNavBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          m: "5rem",
        }}
      >
        <h1>Welcome the Parents signup/login portal.</h1>
        <p>
          Please sign-up and then login to be transfered to your dashboard where
          you can keep up to date with your child's progress and register any
          appointments
        </p>
      </Container>
    </Container>
  );
};
