import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AppProvider";

export const ChildIncidentReports = ({ childData }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const isParent = () => {
    if (user.role === "parent") {
      return true;
    }
  };

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
        <>
          {isParent === false ? (
            <>
              <Alert severity="info">
                {childData?.firstName} {childData?.lastName} has no incident
                reports yet, click on the 'Add Incident' button to submit one.
              </Alert>
              <Button
                sx={{ mt: 2, width: "100%" }}
                variant="contained"
                color="warning"
                size="small"
                onClick={() => {
                  navigate("/certificate/new", { replace: true });
                }}
              >
                Create Certificate
              </Button>
            </>
          ) : (
            <Alert severity="info">
              {childData?.firstName} {childData?.lastName} has no incident
              reports yet.
            </Alert>
          )}
        </>
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
