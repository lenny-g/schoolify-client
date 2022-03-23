import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { IncidentChannel } from "../components/IncidentChannel";
import { IncidentListDesktop } from "../components/IncidentList/IncidentListDesktop";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { MOBILE, DESKTOP } from "../media";
import { useMediaQuery } from "react-responsive";
import { IncidentComment } from "../components/IncidentComment";
import { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { ADD_INCIDENT_REPORT_COMMENT } from "../graphql/mutations";
import {
  GET_TEACHER_STUDENTS,
  VIEW_INCIDENT_REPORTS,
  VIEW_INCIDENT_REPORT_BY_ID,
} from "../graphql/query";

export const ViewIncidentTeacher = () => {
  const isMobile = useMediaQuery(MOBILE);
  const isDesktop = useMediaQuery(DESKTOP);

  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;

  const {
    loading: studentListLoading,
    error: studentListError,
    data: studentList,
  } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: yearGroupId,
    },
    pollInterval: 1000,
  });

  const {
    loading: incidentReportListLoading,
    data: incidentReportList,
    error: incidentReportListError,
    refetch,
  } = useQuery(VIEW_INCIDENT_REPORTS, {
    pollInterval: 1000,
  });

  const [getIncidentReportById] = useLazyQuery(VIEW_INCIDENT_REPORT_BY_ID);

  const [executeAddComment, { error: mutationError }] = useMutation(
    ADD_INCIDENT_REPORT_COMMENT
  );

  const [student, setStudent] = useState();
  const [incidentReportDataById, setIncidentReportDataById] = useState();
  const [showCommentSection, setShowCommentSection] = useState(false);

  const studentIncidents = () => {
    return incidentReportList?.viewIncidentReports
      ?.filter((each) => {
        return each.student.id === student;
      })
      .reverse();
  };

  const renderIncidentReportOnClick = async (selectedIncidentId) => {
    const { data } = await getIncidentReportById({
      variables: { incidentReportId: selectedIncidentId },
    });

    if (data?.viewIncidentReport?.id !== incidentReportDataById?.id) {
      setIncidentReportDataById(data.viewIncidentReport);
    }

    setShowCommentSection(true);
  };

  const renderLoading = () => {
    if (studentListLoading && incidentReportListLoading) {
      return <CircularProgress color="warning" />;
    }
  };

  const renderError = () => {
    if (
      !studentListLoading &&
      studentListError &&
      incidentReportListError &&
      !incidentReportListLoading
    ) {
      return (
        <Alert severity="error">
          Something went wrong, please tray again later.
        </Alert>
      );
    }
  };

  const renderData = () => {
    return (
      <>
        <Grid item xs={12}>
          <PageTitle>Incident Report</PageTitle>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Select Student to view/ respond to incident
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Please note: You are unable to edit and delete your comments, as
            this will remain on record for audit and safeguarding purposes.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item={true} md={isMobile ? 12 : 4} sm={12} xs={12}>
            <IncidentListDesktop
              studentList={studentList?.teacherStudents}
              setStudent={setStudent}
              studentIncidents={studentIncidents}
              renderIncidentReportOnClick={renderIncidentReportOnClick}
              student={student}
              setShowCommentSection={setShowCommentSection}
            />
          </Grid>

          <Grid item={true} md={isMobile ? 12 : 8} sm={12} xs={12}>
            {student && showCommentSection && (
              <IncidentChannel
                incidentReportDataById={incidentReportDataById?.id}
                studentIncidents={studentIncidents}
              />
            )}
          </Grid>
        </Grid>

        {student && showCommentSection && (
          <Grid container>
            <IncidentComment
              showCommentSection={showCommentSection}
              executeAddComment={executeAddComment}
              incidentReportDataById={incidentReportDataById}
              mutationError={mutationError}
              setIncidentReportDataById={setIncidentReportDataById}
              refetch={refetch}
            />
          </Grid>
        )}
      </>
    );
  };

  return (
    <PageContainer>
      {renderLoading()}
      {renderError()}
      {renderData()}
    </PageContainer>
  );
};
