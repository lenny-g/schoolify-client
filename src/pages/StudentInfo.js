import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { item, colors, headers } from "../styles";
import { AbsenceRequestSummary } from "../components/ChildDashboard/AbsenceRequestSummary";
import { ChildProfileCard } from "../components/ChildDashboard/ChildProfileCard";
import logo from "../assets/img/logo.png";

import { VIEW_CHILD } from "../graphql/query";

import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const styles = {
  paperContainer: {
    margin: "2rem 0",
    borderRadius: "25px",
  },
};

export const StudentInfo = (props) => {
  const { studentId } = useParams();

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
  console.log(data.viewChild);

  return (
    <Container>
      <Container component="main">
        <Paper elevation={6} style={styles.paperContainer}>
          <div className="logoContainer">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <Grid container sx={item.outerContainer}>
            <Grid item xs={12}>
              <Typography
                className="headingFont"
                variant="h5"
                gutterBottom
                component="div"
                sx={headers.font}
              >
                {data.viewChild.firstName} {data.viewChild.lastName}'s Dashboard
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={colors.purple}>
                  <ChildProfileCard data={data} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={colors.pink}>Box1</Box>
                <Box sx={colors.green}>box2</Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={colors.yellow}>
                  <AbsenceRequestSummary />
                </Box>

                <Box sx={item.inputBox}>box4</Box>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};
