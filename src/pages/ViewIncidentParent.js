import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { IncidentChannel } from "../components/IncidentChannel";
import { IncidentComment } from "../components/IncidentComment";
import { IncidentListDesktop } from "../components/IncidentList/IncidentListDesktop";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { DESKTOP, MOBILE } from "../media";
import { useMediaQuery } from "react-responsive";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_INCIDENT_REPORT_COMMENT } from "../graphql/mutations";
import {
  GET_PARENTS_CHILDREN,
  VIEW_INCIDENT_REPORTS,
  VIEW_INCIDENT_REPORT_BY_ID,
} from "../graphql/query";

export const ViewIncidentParent = () => {
  const isDesktop = useMediaQuery(DESKTOP);
  const isMobile = useMediaQuery(MOBILE);

  const {
    loading,
    error,
    data: studentList,
  } = useQuery(GET_PARENTS_CHILDREN, {
    pollInterval: 1000,
  });

  const {
    data: incidentReportList,
    error: incidentReportListError,
    loading: incidentReportListLoading,
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
    if (loading && incidentReportListLoading) {
      return <CircularProgress color="warning" />;
    }
  };

  const renderError = () => {
    if (
      !loading &&
      error &&
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
        <PageTitle>Incident Report</PageTitle>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Select your child to view incident
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          Please note: You are unable to edit and delete your comments, as this
          will remain on record for audit and safeguarding purposes.
        </Typography>
        <Grid container>
          <Grid item={true} md={isMobile ? 12 : 4} sm={12} xs={12}>
            <IncidentListDesktop
              studentList={studentList?.parentsChildren?.children}
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
              executeAddComment={executeAddComment}
              incidentReportDataById={incidentReportDataById}
              mutationError={mutationError}
              setIncidentReportDataById={setIncidentReportDataById}
              showCommentSection={showCommentSection}
              refetch={refetch}
              setShowCommentSection={setShowCommentSection}
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
