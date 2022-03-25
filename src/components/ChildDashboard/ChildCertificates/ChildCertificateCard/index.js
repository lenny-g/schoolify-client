import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useMediaQuery } from "react-responsive";
import { TABLET2 } from "../../../../media";

export const ChildCertificateCard = ({
  backgroundImage,
  studentName,
  message,
}) => {
  const isTablet = useMediaQuery(TABLET2);

  const checkViewPort = () => {
    if (isTablet) {
      return {
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "300px",
        height: "225px",
        m: "1rem",
      };
    } else {
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
    }
  };

  return (
    <Box sx={checkViewPort()}>
      <Stack
        justifyContent="center"
        sx={{
          width: "100%",
          height: "100%",
          mt: "2.5rem",
        }}
      >
        <Typography
          variant={isTablet ? "h5" : "subtitle1"}
          textAlign="center"
          sx={{ width: "100%" }}
        >
          {studentName}
        </Typography>
        <Typography
          variant={isTablet ? "subtitle1" : "caption"}
          textAlign="center"
        >
          {message}
        </Typography>
      </Stack>
    </Box>
  );
};
