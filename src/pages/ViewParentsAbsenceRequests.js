import Stack from "@mui/material/Stack";

import { ParentsAbsenceRequestTable } from "../components/ParentsAbsenceRequestTable";
import { PageContainer } from "../components/PageContainer";

export const ViewParentsAbsenceRequests = () => {
  return (
    <PageContainer>
      <Stack spacing={2}>
        <ParentsAbsenceRequestTable />
      </Stack>
    </PageContainer>
  );
};
