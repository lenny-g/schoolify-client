import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";

export const ChildIncidentReports = ({ childData }) => {
  console.log(childData);
  return (
    <Stack sx={{ width: "100%" }}>
      <Typography
        className="headingFont"
        variant="subtitle1"
        gutterBottom
        align="center"
      >
        Incident Reports:
      </Typography>
      {childData?.incidentReports?.length === 0 && (
        <Alert severity="info">
          {childData?.firstName} {childData?.lastName} has no incident reports.
        </Alert>
      )}
      {childData?.incidentReports?.map((incidentReport, index) => {
        return (
          <Box
            component={Link}
            key={index}
            sx={{
              backgroundColor: "blue",
              mb: "10px",
            }}
          >
            <Stack sx={{ width: "100%" }}>
              <Typography align="center">{incidentReport?.title}</Typography>
              <Typography align="center">
                {incidentReport?.description}
              </Typography>
              <Typography align="center">{incidentReport?.teacher}</Typography>
              <Typography align="center">{incidentReport?.dateTime}</Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};
