import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import wellDone from "../../assets/img/certificates/wellDone.png";
export const CertificateCard = ({ backgroundImage, studentName, message }) => {
  const style = {
    boxContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      width: "400px",
      height: "300px",
      margin: "1rem",
    },
  };

  return (
    <Box sx={style.boxContainer}>
      <Typography variant="h5" textAlign="center" marginTop="140px">
        {studentName}
      </Typography>
      <Typography
        variant="subititle1"
        textAlign="center"
        marginTop="5px"
        marginLeft="2rem"
        maxWidth="20px"
      >
        {message}
      </Typography>
    </Box>
  );
};
