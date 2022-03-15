import { ChildrenCards } from "../components/ChildrenCards";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const ViewChildren = () => {
  return (
    <>
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          My Children
        </Typography>
        <ChildrenCards />
      </Container>
    </>
  );
};
