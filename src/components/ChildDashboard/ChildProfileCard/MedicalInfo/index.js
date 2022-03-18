import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { colors, item } from "../../../../styles";

export const MedicalInfo = ({ data }) => {
  return (
    <Box sx={item.inputBox}>
      <Typography variant="subtitle1" gutterBottom>
        Medical Requirements:
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle2" gutterBottom sx={{ m: "10px" }}>
          Allergies:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {data.viewChild.medical.allergies.map((allergy, index) => {
            return <Chip label={allergy} key={index} />;
          })}
        </Stack>
        <Box>
          <Typography variant="subtitle2" gutterBottom sx={{ m: "10px" }}>
            Disabilities:
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data.viewChild.medical.disabilities.map((disability, index) => {
              return <Chip label={disability} key={index} />;
            })}
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom sx={{ m: "10px" }}>
            Medication:
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data.viewChild.medical.medications.map((medication, index) => {
              return <Chip label={medication} key={index} />;
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
