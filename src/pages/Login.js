import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { LoginForm } from "../components/LoginForm/LoginForm";

export const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <LoginForm />
    </Container>
  );
};
