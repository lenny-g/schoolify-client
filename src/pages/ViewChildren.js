import { ChildrenCards } from "../components/ChildrenCards";
import { item, headers } from "../styles";
import logo from "../assets/img/logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const styles = {
  paperContainer: {
    margin: "2rem 0",
    borderRadius: "25px",
  },
};

const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;

export const ViewChildren = () => {
  return (
    <Container component="main" maxWidth="md">
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
              Hi {firstName} {lastName}!
            </Typography>
          </Grid>
          <Box sx={item.outerContainer}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "black", textAlign: "center" }}
            >
              Please select your child's card to go to their dashboard.
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Please note: if you have more then one child attending the school,
              you are able to add multiple children by clicking on the{" "}
              <PersonAddIcon fontSize="inherit" /> icon in your navbar.
            </Typography>
            <ChildrenCards />
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
};
