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
