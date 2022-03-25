import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useMediaQuery } from "react-responsive";
import { MOBILE } from "../../media";

export const CertificateCard = ({ backgroundImage, studentName, message }) => {
  const isMobile = useMediaQuery(MOBILE);

  const checkViewPort = () => {
    if (isMobile) {
      return {
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "200px",
        height: "150px",
        m: "1rem",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "400px",
        height: "300px",
        margin: "1rem",
      };
    }
  };

  return (
    <Box sx={checkViewPort()}>
      <Stack
        justifyContent="center"
        sx={{
          width: "100%",
          height: "100%",
          mt: "1.5rem",
        }}
      >
        <Typography
          variant={!isMobile ? "h5" : "subtitle1"}
          textAlign="center"
          sx={{ width: "100%" }}
        >
          {studentName}
        </Typography>
        <Typography
          variant={!isMobile ? "subtitle1" : "caption"}
          textAlign="center"
        >
          {message}
        </Typography>
      </Stack>
    </Box>
  );
};
