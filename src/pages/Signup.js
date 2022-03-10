import {
  ParentSignupForm,
  SignupForm,
} from "../components/SignupForms/ParentSignupForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Signup = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentSignupForm />
    </Container>
  );
};
