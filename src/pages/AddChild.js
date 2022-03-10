import React from "react";
import { AddChildForm } from "../components/AddChild/AddChildForm";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const AddChild = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        <AddChildForm />
      </Typography>
    </Container>
  );
};
