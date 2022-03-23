import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export const MedicalInfo = ({ childData }) => {
  return (
    <Stack spacing={2} sx={{ textAlign: "center" }}>
      <Typography variant="subtitle1">Medical Requirements:</Typography>

      {!childData.medical ? (
        <Alert severity="info">
          {childData.firstName} {childData.lastName} doesn't have any medical
          information yet, click on the 'add medical' button to submit one.
        </Alert>
      ) : (
        <>
          <Typography variant="subtitle2" gutterBottom>
            Allergies:
          </Typography>
          <Box direction="column">
            {childData?.medical?.allergies?.map((allergy, index) => {
              return <Chip label={allergy} key={index} sx={{ ml: "5px" }} />;
            })}
          </Box>
          <Typography variant="subtitle2" gutterBottom>
            Disabilities:
          </Typography>
          <Box direction="column">
            {childData?.medical?.disabilities?.map((disability, index) => {
              return <Chip label={disability} key={index} sx={{ ml: "5px" }} />;
            })}
          </Box>
          <Typography variant="subtitle2" gutterBottom>
            Medication:
          </Typography>
          <Box direction="column">
            {childData?.medical?.medications?.map((medication, index) => {
              return <Chip label={medication} key={index} sx={{ ml: "5px" }} />;
            })}
          </Box>
          <Typography variant="subtitle2" gutterBottom>
            Additional Info:
          </Typography>
          <Box direction="column">
            <Chip label={childData.medical.additionalInfo} sx={{ ml: "5px" }} />
          </Box>{" "}
        </>
      )}
    </Stack>
  );
};
