import Container from "@mui/material/Container";
import { useMediaQuery } from "react-responsive";

import { MOBILE } from "../../media";
import { getContainerStyles } from "../../styles";
import { Logo } from "../Logo";

export const PageContainer = ({ children }) => {
  const isMobile = useMediaQuery(MOBILE);

  return (
    <Container sx={getContainerStyles(isMobile)} disableGutters={isMobile}>
      <Logo />
      {children}
    </Container>
  );
};
