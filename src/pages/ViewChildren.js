import { StudentCards } from "../components/StudentCards";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const ViewChildren = () => {
  return (
    <>
      <ParentNavBar />
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          My Children
        </Typography>
        <StudentCards />
      </Container>
    </>
  );
};
