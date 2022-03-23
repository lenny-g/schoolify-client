import Box from "@mui/material/Box";

import logo from "../../assets/img/logoPages.png";
import parentLogo from "../../assets/img/parent.png";
import teacherLogo from "../../assets/img/teacher.png";
import { useAuth } from "../../context/AppProvider";

export const Logo = ({}) => {
  const { user } = useAuth();

  const appLogo = () => {
    if (user?.role === "parent") {
      return parentLogo;
    } else if (user?.role === "teacher") {
      return teacherLogo;
    } else {
      return logo;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: { xs: 200, md: 300 },
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0 2rem 0",
        }}
        alt="logo"
        src={appLogo()}
      />
    </Box>
  );
};
