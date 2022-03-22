import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export const TeamMemberCard = ({
  img,
  name,
  description,
  linkedIn,
  github,
  portfolio,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        m: "1rem",
        backgroundColor: "#b7cbf88a",
        padding: " 20px",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        image={img}
        alt={name}
        sx={{ borderRadius: "15px" }}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
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
    </Card>
  );
};
