import React from "react";

import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { AbsenceRequestTable } from "../components/AbsenceRequestTable";

export const ViewAbsenceRequests = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentNavBar />
      <Box>
        <AbsenceRequestTable />
      </Box>
    </Container>
  );
};
