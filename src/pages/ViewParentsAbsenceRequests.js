import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ParentsAbsenceRequestTable } from "../components/ParentsAbsenceRequestTable";
import { PageContainer } from "../components/PageContainer";
import { item } from "../styles";

export const ViewParentsAbsenceRequests = () => {
  return (
    <PageContainer>
      <Stack spacing={2}>
        <ParentsAbsenceRequestTable />
      </Stack>
    </PageContainer>
  );
};
