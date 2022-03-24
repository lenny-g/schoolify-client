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
import { PageError } from "../components/PageError";
import { Loading } from "../components/Loading";
import { MedicalInfo } from "../components/ChildDashboard/MedicalInfo";
import { ChildCertificates } from "../components/ChildDashboard/ChildCertificates";
import { ChildIncidentReports } from "../components/ChildDashboard/ChildIncidentReports";
import { certificateOptions } from "../data/certificateTypes";

export const StudentInfo = () => {
  const { studentId } = useParams();

  console.log(studentId);

  const { data, loading, error } = useQuery(VIEW_CHILD, {
    variables: { studentId },

    pollInterval: 1000,
  });
  const childData = data?.viewChild;

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <PageError />;
  }

  const certificateImg = (value) => {
    const certificateData = certificateOptions.find((each) => {
      return each.value === value;
    });
    return certificateData.backgroundImage;
  };

  return (
    <PageContainer>
      <Grid container sx={item.outerContainer}>
        <Grid item xs={12}>
          <PageTitle>
            {childData?.firstName} {childData?.lastName}'s Dashboard
          </PageTitle>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <ChildProfileCard childData={childData} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <MedicalInfo childData={childData} />
            </Box>
            <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
              <ChildCertificates
                childData={childData}
                certificateImg={certificateImg}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
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
