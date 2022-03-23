import { item, GREEN, forms } from "../../styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const IncidentChannel = ({
  incidentReportDataById,
  studentIncidents,
  user,
}) => {
  const userRole = `${user?.firstName} ${user?.lastName}`;

  const incidentReportData = studentIncidents()?.find((each) => {
    return each.id === incidentReportDataById;
  });

  return (
    <Box
      sx={{
        ...forms.container,
        backgroundColor: GREEN,
        maxHeight: "450px",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ textAlign: "center", textTransform: "uppercase" }}
      >
        {incidentReportData?.title}
      </Typography>
      <Stack
        spacing={2}
        sx={{ width: "100%", display: "flex", justifyContent: "end" }}
      >
        <Stack sx={{ ...item.incident, textAlign: "center" }}>
          <Typography variant="body1">
            {incidentReportData?.description}
          </Typography>
          <Typography variant="caption">
            {incidentReportData?.teacher.title}
            {incidentReportData?.teacher.firstName}
            {incidentReportData?.teacher.lastName}
          </Typography>
          <Typography variant="caption">
            {incidentReportData?.dateTime.split(" ").slice(4, 5).join(" ")}
          </Typography>
        </Stack>

        {incidentReportData?.comments?.map((each, index) => {
          return (
            // {each.name === userRole ?}
            <Stack
              key={index}
              sx={
                each.name === userRole
                  ? item.teacherComment
                  : item.parentComment
              }
            >
              <Typography variant="body1">{each.message}</Typography>
              <Typography variant="caption">{each.name}</Typography>
              <Typography variant="caption">
                {each.dateTime.split(" ").slice(4, 5).join(" ")}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
