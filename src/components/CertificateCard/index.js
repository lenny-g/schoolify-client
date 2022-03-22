import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import wellDone from "../../assets/img/certificates/wellDone.png";

const style = {
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${wellDone})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "400px",
    height: "300px",
  },
};

const certificateArray = [
  {
    name: "Brilliant Behaviour",
    value: "brilliantBehaviour",
    backgroundImage: "../../assets/img/certificates/brilliantBehavior.png",
  },
  {
    name: "Class Helper",
    value: "classHelper",
    backgroundImage: "../../assets/img/certificates/classHelper.png",
  },
  {
    name: "Excellent Achievement",
    value: "excellentAchievement",
    backgroundImage: "../../assets/img/certificates/excellentAchievement.png",
  },
  {
    name: "Fantastic Friend",
    value: "fantasticFriend",
    backgroundImage: "../../assets/img/certificates/fantasticFriend.png",
  },
  {
    name: "Star Of The Day",
    value: "starOfTheDay",
    backgroundImage: "../../assets/img/certificates/starOfTheDay.png",
  },
  {
    name: "Student Of The Week",
    value: "studentOfTheWeek",
    backgroundImage: "../../assets/img/certificates/studentOfTheWeek.png",
  },
  {
    name: "Well Done",
    value: "wellDone",
    backgroundImage: "../../assets/img/certificates/wellDone.png",
  },
];

export const Certificate = () => {
  return (
    <Box style={style.boxContainer}>
      <Typography variant="h5" textAlign="center" marginTop="140px">
        Nazeh Abel
      </Typography>
      <Typography variant="subititle1" textAlign="center">
        for being helpful
      </Typography>
    </Box>
  );
};
