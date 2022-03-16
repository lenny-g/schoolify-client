import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";
import { VIEW_CHILD } from "../graphql/query";

export const StudentInfo = () => {
  const { studentId } = useParams();

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(VIEW_CHILD, {
    variables: { studentId },
  });

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

  console.log(data);

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
          STUDENT PAGE
        </Typography>
        <div>{data.viewChild.lastName}</div>
      </Container>
    </>
  );
};
