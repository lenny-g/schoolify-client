import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { forms, GREEN } from "../../styles";

export const TeamMemberCard = ({
  img,
  name,
  description,
  linkedIn,
  github,
  portfolio,
}) => {
  return (
    <Box
      sx={{
        ...forms.container,
        backgroundColor: GREEN,
        maxWidth: "250px",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        image={img}
        alt={name}
        sx={{ borderRadius: "15px" }}
      />
      <Stack spacing={2}>
        <Typography variant="h3" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton
          aria-label="linkedIn"
          component={Link}
          href={linkedIn}
          color="warning"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="gitHub"
          component={Link}
          href={github}
          color="warning"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="portfolio"
          component={Link}
          href={portfolio}
          color="warning"
        >
          <LanguageIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
