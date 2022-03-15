import { PublicNavBar } from "../components/NavigationBar/PublicNavBar";
import Container from "@mui/material/Container";
import { HomePageNavBtn } from "../components/HomePageNavBtn";
import { Paper } from "@material-ui/core";
import logoMain from "../assets/img/logoMain.png";
import { colors } from "../styles";
import { HomePageIntro } from "../components/HomePageIntro";

const styles = {
  paperContainer: {
    margin: "2rem 0",
    borderRadius: "25px",
  },
};

export const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <PublicNavBar />
      <Container component="main" maxWidth="md">
        <Paper elevation={6} style={styles.paperContainer}>
          <div className="logoContainer">
            <img src={logoMain} className="logo" />
          </div>
          <HomePageIntro />
          <HomePageNavBtn />
        </Paper>
      </Container>
    </Container>
  );
};
