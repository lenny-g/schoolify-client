import parseISO from "date-fns/parseISO";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AppProvider";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

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

export const AbsenceRequestSummary = ({ childData, fullName }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const isParent = () => {
    if (user.role === "parent") {
      return true;
    }
  };

  const formattedChildData = childData?.absenceRequests?.map(
    (absenceRequest) => {
      return {
        absenceRequestId: absenceRequest.id,
        type: absenceRequest.type,
        description: absenceRequest.description,
        dateTime:
          parseISO(absenceRequest.dateTime).toGMTString().split("GMT")[0] ===
          "Invalid Date"
            ? absenceRequest.dateTime
            : parseISO(absenceRequest.dateTime).toGMTString().split("GMT")[0],
        status: absenceRequest.status,
      };
    }
  );

  return (
    <Stack width="100%">
      <Typography className="headingFont" variant="subtitle1" align="center">
        Absence Requests:
      </Typography>
      <Typography variant="caption" gutterBottom align="center">
        Click to view status
      </Typography>
      {formattedChildData.length === 0 && (
        <>
          {isParent === false ? (
            <Alert variant="outlined" severity="info">
              {childData.firstName} {childData.lastName} has no absence requests
              yet.
            </Alert>
          ) : (
            <>
              <Alert variant="outlined" severity="info">
                {childData.firstName} {childData.lastName} has no absence
                requests yet, click on the 'Request Absence' button to submit
                one.
              </Alert>
              <Button
                sx={{ mt: 2, width: "100%" }}
                variant="contained"
                color="warning"
                size="small"
                onClick={() => {
                  navigate("/absenceRequest/new", { replace: true });
                }}
              >
                Request Absence
              </Button>
            </>
          )}
        </>
      )}
      {formattedChildData?.map((absenceRequest, index) => {
        return (
          <Box
            onClick={() => {
              if (user.role === "parent") {
                return navigate(`/absenceRequest/view`, {
                  replace: true,
                });
              } else {
                return navigate(`/absence-requests?studentName=${fullName}`, {
                  replace: true,
                });
              }
            }}
            disabled={checkStatus(absenceRequest.status)}
            key={index}
            sx={{
              borderRadius: "10px",
              backgroundColor: stylingAbsenceRequestColor(
                absenceRequest.status
              ),
              mb: "10px",
              "&:hover": {
                opacity: "0.5",
                cursor: "pointer",
              },
            }}
          >
            <Stack
              sx={{
                width: "100%",
                padding: "5px 0px",
                borderRadius: "10px",
                backgroundColor: stylingAbsenceRequestColor(
                  absenceRequest.status
                ),
              }}
            >
              <Typography align="center">{absenceRequest.status}</Typography>
              <Typography variant="subtitle1" align="center">
                {absenceRequest.dateTime}
              </Typography>
              <Typography variant="caption" align="center">
                {absenceRequest.type}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};
