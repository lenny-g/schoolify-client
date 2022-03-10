import { LoginForm } from "../components/LoginForm/LoginForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";

export const Login = () => {
  return (
    <Container>
      <PublicNavBar />
      <Container component="main" maxWidth="xs">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          Login
        </Typography>
        <LoginForm />
      </Container>
    </Container>
  );
};
