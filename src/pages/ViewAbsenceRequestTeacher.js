import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { TeachersAbsenceRequestsTable } from "../components/TeachersAbsenceRequestsTable";

export const ViewAbsenceRequestTeacher = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box>
        <TeachersAbsenceRequestsTable />
      </Box>
    </Container>
  );
};
