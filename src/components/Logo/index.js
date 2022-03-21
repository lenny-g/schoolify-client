import Box from "@mui/material/Box";
import logo from "../../assets/img/logo.png";
import { brand } from "../../styles";

export const Logo = ({}) => {
  return (
    <Box
      component="img"
      sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 130, md: 167 },
        maxWidth: { xs: 170, md: 250 },
        display: "flex",
        margin: "auto",
        justifyContent: "center",
      }}
      alt="logo"
      src={logo}
    />
  );
};
