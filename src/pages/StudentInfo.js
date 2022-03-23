import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import { VIEW_CHILD } from "../graphql/query";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { item, forms, GREEN } from "../styles";

import { PageContainer } from "../components/PageContainer/";
import { AbsenceRequestSummary } from "../components/ChildDashboard/AbsenceRequestSummary";
import { ChildProfileCard } from "../components/ChildDashboard/ChildProfileCard";
import { PageTitle } from "../components/PageTitle";

import { MedicalInfo } from "../components/ChildDashboard/MedicalInfo";
import { ChildCertificates } from "../components/ChildDashboard/ChildCertificates";
import { ChildIncidentReports } from "../components/ChildDashboard/ChildIncidentReports";

export const StudentInfo = () => {
  const { studentId } = useParams();

  const { data, loading, error } = useQuery(VIEW_CHILD, {
    variables: { studentId },

    pollInterval: 1000,
  });
  const childData = data?.viewChild;

  console.log(childData);

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

  if (!loading && error) {
    return (
      <Alert severity="error">
        Something went wrong, please tray again later.
      </Alert>
    );
  }

  return (
    <PageContainer>
      <Grid container sx={item.outerContainer}>
        <Grid item xs={12}>
          <PageTitle>
            {childData.firstName} {childData.lastName}'s Dashboard
          </PageTitle>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <ChildProfileCard childData={childData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <MedicalInfo childData={childData} />
            </Box>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              Container2
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <AbsenceRequestSummary childData={childData} />
            </Box>

            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <ChildIncidentReports childData={childData} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
