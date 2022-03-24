import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

import { MOBILE, DESKTOP } from "../../media";
import { homeContainerStyles } from "../../styles";
import stop from "../../assets/img/stop.png";

export const HomePageThree = () => {
  const isMobile = useMediaQuery(MOBILE);
  const isDesktop = useMediaQuery(DESKTOP);
  return (
    <Box sx={homeContainerStyles(isMobile)}>
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          alt="Home Image"
          sx={{ width: isMobile ? "80%" : "350px" }}
          src={stop}
        />
        <Box
          sx={{
            width: isDesktop ? "70%" : "unset",
            textAlign: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            component="div"
            sx={{ m: "10px" }}
          >
            Ever forgotten to <b>notify</b> the school of an
            <b> upcoming appointment</b> for your child that has resulted in an
            'unauthorized absence'?
          </Typography>
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            gutterBottom
            component="div"
            sx={{ m: "10px" }}
          >
            What if we tell you that you can pre-plan requests for leave? We
            understand how frustrating it is when your request for leave is
            rejected - we support 'rejection with reason', so that you too can
            know the reason behind the decision.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
