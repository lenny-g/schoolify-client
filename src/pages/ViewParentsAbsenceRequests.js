import React from "react";

import { ParentNavBar } from "../components/NavigationBar/ParentNavBar";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ParentsAbsenceRequestTable } from "../components/ParentsAbsenceRequestTable";

export const ViewParentsAbsenceRequests = () => {
  return (
    <Container component="main" maxWidth="md">
      <ParentNavBar />
      <Box>
        <ParentsAbsenceRequestTable />
      </Box>
    </Container>
  );
};
