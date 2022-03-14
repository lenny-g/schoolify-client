import { StudentCards } from "../components/StudentCards";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const ViewStudents = () => {
  const yearGroup = JSON.parse(localStorage.getItem("user")).yearGroup.title;

  return (
    <>
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          My {yearGroup} Students
        </Typography>
        <StudentCards />
      </Container>
    </>
  );
};
