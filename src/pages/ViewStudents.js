import { StudentCards } from "../components/StudentCards";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { useAuth } from "../context/AppProvider";
import { GET_TEACHER_STUDENTS } from "../graphql/query";
import { useQuery } from "@apollo/client";

import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

export const ViewStudents = () => {
  const { user } = useAuth();

  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;

  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: yearGroupId,
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
        <>
          <PageTitle> My.{user?.yearGroup?.title}.Classroom</PageTitle>
          <StudentCards studentData={data?.teacherStudents} />
        </>
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
