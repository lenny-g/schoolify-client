import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AppProvider";
import { GREEN } from "../../../styles";
import { color } from "@mui/system";

export const ChildIncidentReports = ({ childData }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const isParent = () => {
    if (user.role === "parent") {
      return true;
    }
  };

  console.log(childData);

  return (
    <Stack sx={{ width: "100%" }}>
      <Typography className="headingFont" variant="subtitle1" align="center">
        Incident Reports:
      </Typography>
      <Typography variant="caption" gutterBottom align="center">
        Click to view Incident
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
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px",
              backgroundColor: "#D0FBF3",
              borderRadius: "10px",
              mb: 2,
              textDecoration: "none",
            }}
          >
            <Stack
              id={incidentReport.id}
              sx={{ width: "100%", color: "black" }}
              onClick={() => {
                navigate("/incident-report/view/parent", { replace: true });
              }}
            >
              <Typography variant="subtitle1" align="center">
                {incidentReport?.title}
              </Typography>
              <Typography variant="caption" align="center">
                {incidentReport?.dateTime?.split(" ").slice(1, 5).join(" ")}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};
