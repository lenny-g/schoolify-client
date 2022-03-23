import { item } from "../styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";

const styles = {
  paperContainer: {
    margin: "2rem 0",
    borderRadius: "25px",
  },
};

const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;

export const TeacherDashboard = () => {
  return (
    <PageContainer>
      <Grid container sx={item.outerContainer}>
        {/* <Grid item xs={12}>
					<Typography
						className='headingFont'
						variant='h5'
						gutterBottom
						component='div'
						sx={headers.font}>
						Welcome {firstName} {lastName}!
					</Typography>
					
				</Grid> */}
        <PageTitle>
          Welcome {firstName} {lastName}!
        </PageTitle>
        <Box sx={item.outerContainer}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "black", textAlign: "center" }}
          >
            DASHBOARD
          </Typography>
        </Box>
      </Grid>
    </PageContainer>
  );
};
