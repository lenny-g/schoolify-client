import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MathIcon from "@mui/icons-material/Calculate";
import EnglishIcon from "@mui/icons-material/MenuBook";
import PhysicalEdIcon from "@mui/icons-material/Sports";
import ArtsIcon from "@mui/icons-material/Palette";
import MusicIcon from "@mui/icons-material/MusicNote";
import ScienceIcon from "@mui/icons-material/Science";
import ItIcon from "@mui/icons-material/Laptop";
import GeographyIcon from "@mui/icons-material/Public";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SocialStudiesIcon from "@mui/icons-material/ConnectWithoutContact";
import ReligionIcon from "@mui/icons-material/Mosque";

export const YearGroupInfo = ({ yearGroupData }) => {
  const iconSelector = (subject) => {
    if (subject === "Maths") {
      return <MathIcon />;
    }

    if (subject === "English") {
      return <EnglishIcon />;
    }

    if (subject === "Science") {
      return <ScienceIcon />;
    }

    if (subject === "P.E") {
      return <PhysicalEdIcon />;
    }

    if (subject === "Art") {
      return <ArtsIcon />;
    }

    if (subject === "IT") {
      return <ItIcon />;
    }

    if (subject === "Social Studies") {
      return <SocialStudiesIcon />;
    }

    if (subject === "Religious Studies") {
      return <ReligionIcon />;
    }

    if (subject === "History") {
      return <HistoryEduIcon />;
    }

    if (subject === "Geography") {
      return <GeographyIcon />;
    }

    if (subject === "Music") {
      return <MusicIcon />;
    }
  };

  return (
    <Stack width="100%">
      <Typography
        className="headingFont"
        variant="subtitle1"
        gutterBottom
        textAlign="center"
      >
        Year Group: {yearGroupData.title}
      </Typography>
      <Box sx={{ mt: "10px" }}>
        <List>
          {yearGroupData.subjects.map((subject, index) => {
            return (
              <ListItem key={index} sx={{ p: "2px 16px" }}>
                <ListItemIcon>{iconSelector(subject)}</ListItemIcon>
                <ListItemText>{subject}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Stack>
  );
};
