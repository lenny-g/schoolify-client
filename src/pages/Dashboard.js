import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Dashboard
      </Typography>
      <ParentNavBar />
    </Container>
  );
};
