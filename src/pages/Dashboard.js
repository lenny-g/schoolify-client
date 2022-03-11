import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { StudentCards } from "../components/StudentCards";
export const Dashboard = () => {
  return (
    <>
      <ParentNavBar />
      <Container component="main" maxWidth="xs">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          Dashboard
        </Typography>
        <StudentCards />
      </Container>
    </>
  );
};
