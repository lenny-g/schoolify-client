import * as React from "react";
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
    <Card sx={{ maxWidth: 345, m: "1rem" }}>
      <CardMedia component="img" height="400px" image={img} alt={name} />
      <CardContent>
        <Typography variant="body" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <IconButton aria-label="linkedIn" component={Link} href={linkedIn}>
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="gitHub" component={Link} href={github}>
        <GitHubIcon />
      </IconButton>
      <IconButton aria-label="portfolio" component={Link} href={portfolio}>
        <LanguageIcon />
      </IconButton>
    </Card>
  );
};
