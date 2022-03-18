import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { colors, item } from "../../../styles";
import { MedicalInfo } from "./MedicalInfo";

export const ChildProfileCard = ({ childData }) => {
  return (
    <Box sx={item.inputBox} width="250px">
      <Avatar
        alt="teacher signup"
        src="https://cdn.24.co.za/files/Cms/General/d/10868/da4178db584e45fab43b01ea0f9aad30.jpg"
        sx={{ width: 200, height: 200 }}
      />
      <MedicalInfo childData={childData} />
    </Box>
  );
};
