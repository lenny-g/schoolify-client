import { ParentsAbsenceRequestTable } from "../components/ParentsAbsenceRequestTable";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ViewParentsAbsenceRequests = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box>
        <ParentsAbsenceRequestTable />
      </Box>
    </Container>
  );
};
