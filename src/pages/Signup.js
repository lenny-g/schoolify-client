import {
  ParentSignupForm,
  SignupForm,
} from "../components/SignupForms/ParentSignupForm";
import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Signup = () => {
  return (
    <Container>
      <PublicNavBar />
      <Container component="main" maxWidth="md">
        <ParentSignupForm />
      </Container>
    </Container>
  );
};
