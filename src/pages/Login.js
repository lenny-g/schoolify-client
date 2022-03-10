import { LoginForm } from "../components/LoginForm/LoginForm";
import Container from "@mui/material/Container";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";

export const Login = () => {
  return (
    <Container>
      <PublicNavBar />
      <Container component="main" maxWidth="xs">
        <LoginForm />
      </Container>
    </Container>
  );
};
