import parseISO from "date-fns/parseISO";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const stylingAbsenceRequestColor = (status) => {
  if (status === "PENDING") return "#ead885";
  if (status === "APPROVED") return "#79d8a5";
  if (status === "REJECTED") return "#ef8080";
};

const checkStatus = (status) => {
  if (status !== "REJECTED") {
  }
  return true;
};

export const AbsenceRequestSummary = ({ childData }) => {
  const formattedChildData = childData?.absenceRequests?.map(
    (absenceRequest) => {
      return {
        absenceRequestId: absenceRequest.id,
        type: absenceRequest.type,
        description: absenceRequest.description,
        dateTime: `${
          parseISO(absenceRequest.dateTime).toGMTString().split("GMT")[0]
        }  `,
        status: absenceRequest.status,
      };
    }
  );

  return (
    <Box width="100%">
      <Typography className="headingFont" variant="subtitle1" gutterBottom>
        Absence Requests:
      </Typography>
      {formattedChildData.length === 0 && (
        <Alert severity="info">
          {childData.firstName} {childData.lastName} has no absence requests
          yet, click on the 'request absence' button to submit one.
        </Alert>
      )}
      {formattedChildData?.map((absenceRequest, index) => {
        return (
          <Accordion
            disabled={checkStatus(absenceRequest.status)}
            key={index}
            sx={{
              backgroundColor: stylingAbsenceRequestColor(
                absenceRequest.status
              ),
              mb: "10px",
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: stylingAbsenceRequestColor(
                  absenceRequest.status
                ),
              }}
            >
              <Stack sx={{ width: "100%" }}>
                <Typography align="center">{absenceRequest.type}</Typography>
                <Typography align="center">
                  {absenceRequest.dateTime}
                </Typography>
                <Typography align="center">{absenceRequest.status}</Typography>
              </Stack>
            </AccordionSummary>
            {absenceRequest.status === "REJECTED" && (
              <AccordionDetails>
                <Typography>
                  We cannot allow child to have a day off for a family trip, as
                  there are ample opportunities during half term break.
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </Box>
  );
};
