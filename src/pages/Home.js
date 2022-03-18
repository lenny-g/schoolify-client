import { HomePageNavBtn } from "../components/HomePageNavBtn";
import { HomePageIntro } from "../components/HomePageIntro";
import logoMain from "../assets/img/logoMain.png";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const styles = {
  paperContainer: {
    margin: "2rem 0",
    borderRadius: "25px",
  },
};

export const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={6} style={styles.paperContainer}>
        <div className="logoContainer">
          <img src={logoMain} className="logo" alt="logo" />
        </div>
        <HomePageIntro />
        <HomePageNavBtn />
      </Paper>
    </Container>
  );
};
