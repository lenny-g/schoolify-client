import Container from "@mui/material/Container";
import { useMediaQuery } from "react-responsive";

import { MOBILE } from "../../media";
import { getContainerStyles } from "../../styles";
import { Logo } from "../Logo";
import { DateAndTime } from "../DateAndTime";

export const PageContainer = ({ children }) => {
  const isMobile = useMediaQuery(MOBILE);

  return (
    <Container
      maxWidth="md"
      sx={getContainerStyles(isMobile)}
      disableGutters={isMobile}
    >
      <Logo />
      <DateAndTime />
      {children}
    </Container>
  );
};
