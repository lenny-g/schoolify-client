import { useParams } from "react-router-dom";
import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const StudentInfo = () => {
  const { studentId } = useParams();

  return (
    <>
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          STUDENT PAGE
        </Typography>
        <div>{studentId}</div>
      </Container>
    </>
  );
};
