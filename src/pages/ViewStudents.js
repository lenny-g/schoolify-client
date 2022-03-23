import { StudentCards } from "../components/StudentCards";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { useAuth } from "../context/AppProvider";
import { GET_TEACHER_STUDENTS } from "../graphql/query";
import { useQuery } from "@apollo/client";

import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export const ViewStudents = () => {
  const { user } = useAuth();

  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: user?.yearGroup.id,
    },
    pollInterval: 1000,
  });

  const renderLoading = () => {
    if (loading) {
      return <LinearProgress style={{ backgroundColor: "purple" }} />;
    }
  };

  const renderError = () => {
    if (!loading && error) {
      return (
        <Alert severity="error">
          Something went wrong, please tray again later.
        </Alert>
      );
    }
  };

  const renderData = () => {
    if (!loading && !error && data?.teacherStudents) {
      return (
        <Stack spacing={2}>
          <PageTitle>
            WELCOME {user.firstName} {user.lastName}!
          </PageTitle>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            My {user?.yearGroup?.title} Classroom
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Select your student's card to go to their dashboard
          </Typography>

          <StudentCards studentData={data?.teacherStudents} />
        </Stack>
      );
    }
  };

  return (
    <PageContainer>
      {renderLoading()}
      {renderError()}
      {renderData()}
    </PageContainer>
  );
};
